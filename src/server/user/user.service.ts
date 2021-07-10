import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {JwtService} from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'
import {User, UserDocument} from './user.model'
import {IEmailAndPassword} from './types'
import {InjectModel} from '@nestjs/mongoose'
import {Model} from 'mongoose'
import {CloudinaryService} from '../cloudinary/cloudinary.service'
import {CreateUserInput, UpdateUserInput} from './user.inputs'
import {Schema as MongooseSchema} from 'mongoose'

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
    private cloudinaryService: CloudinaryService,
  ) {}

  /**
   * Util function for checking user existing
   */
  async validateUser(email: string, password: string) {
    const user = await this.userModel.findOne({email}).exec()
    if (!user) {
      throw new HttpException('Incorrect email/password', HttpStatus.CONFLICT)
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (user && isMatch) {
      return user.populate('products')
    }
    throw new HttpException('Incorrect email/password', HttpStatus.CONFLICT)
  }

  /**
   * Returning user credantials and token
   */
  async login(email: string, password: string) {
    const user = await this.validateUser(email, password)
    const payload: IEmailAndPassword = {email, password}
    return {
      token: this.jwtService.sign(payload),
      _id: user._id,
      email,
      name: user.name,
      type: user.type,
      products: user.products,
      phone: user.phone,
      photo: user.photo,
    }
  }

  /**
   * Find a user by email
   */
  async findById(_id: MongooseSchema.Types.ObjectId) {
    return await this.userModel.findById(_id).populate('products').exec()
  }

  /**
   * Creating user
   */
  async create(dto: CreateUserInput) {
    const {email, password, type, name, phone} = dto
    const candidate = await this.userModel.findOne({email}).exec()
    if (candidate) {
      throw new HttpException('User already exists', HttpStatus.CONFLICT)
    }

    const hashedPassword = await bcrypt.hash(password, 2)

    const user = await this.userModel.create({
      email,
      password: hashedPassword,
      name,
      type,
      products: [],
      phone,
    })

    await user.save()

    const token = await this.jwtService.sign({email, password})

    return {_id: user._id, email, name, type, products: [], token, phone}
  }

  async update(dto: UpdateUserInput) {
    const user = await this.userModel.findById(dto._id)
    if (user.email !== dto.email) {
      const condidate = await this.userModel.find({email: user.email}).exec()
      if (condidate) {
        throw new HttpException('Email already exists', HttpStatus.CONFLICT)
      }
    }
    let photo
    if (dto.photo) {
      photo = await this.cloudinaryService.uploadImage(dto.photo)
    }
    const updatedUser = await this.userModel
      .findByIdAndUpdate(dto._id, {
        email: dto.email,
        name: dto.name,
        phone: dto.phone,
        photo,
      })
      .select('-password')
      .exec()

    return updatedUser
  }

  async upload(file: string, id: string) {
    const result = await this.cloudinaryService.uploadImage(file)
    await this.userModel.findByIdAndUpdate(id, {photo: result.url})
    return result.url
  }
}
