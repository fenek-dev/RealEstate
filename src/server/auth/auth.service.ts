import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {JwtService} from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'
import {User, UserDocument} from './schema/user.schema'
import {IEmailAndPassword} from './types'
import {InjectModel} from '@nestjs/mongoose'
import {Model} from 'mongoose'
import {CreateUserDto} from './dto/create-user.dto'
import {UpdateUserDto} from './dto/update-user.dto'

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  /**
   * Util function for checking user existing
   */
  async validateUser(email: string, password: string) {
    const user = await this.findOne(email)
    if (!user) {
      throw new HttpException('Incorrect email/password', HttpStatus.CONFLICT)
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (user && isMatch) {
      return user
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
    }
  }

  /**
   * Find a user by email
   */
  async findOne(email: string) {
    return await this.userModel.findOne({email}).exec()
  }

  /**
   * Creating user
   */
  async create(dto: CreateUserDto) {
    const {email, password, type, name, phone} = dto
    const candidate = await this.findOne(email)
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

  async update(dto: UpdateUserDto) {
    const user = await this.userModel.findById(dto._id)
    if (user.email !== dto.email) {
      const condidate = await this.userModel.find({email: user.email}).exec()
      if (condidate) {
        throw new HttpException('Email already exists', HttpStatus.CONFLICT)
      }
    }
    await this.userModel
      .findByIdAndUpdate(dto._id, {
        email: dto.email,
        name: dto.name,
        phone: dto.phone,
      })
      .select('-password')
      .exec()

    return dto
  }
}
