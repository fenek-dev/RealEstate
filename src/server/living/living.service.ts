import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {InjectModel} from '@nestjs/mongoose'
import {Model, ObjectId} from 'mongoose'
import {User, UserDocument} from '../auth/schema/user.schema'
import {CloudinaryService} from '../cloudinary/cloudinary.service'
import {CreateLivingDto} from './dto/create-living.dto'
import {UpdateLivingDto} from './dto/update-living.dto'
import {Living, LivingDocument} from './schema/living.schema'
import {ISearchBody} from './types'

@Injectable()
export class LivingService {
  constructor(
    @InjectModel(Living.name) private LivingModel: Model<LivingDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private cloudinaryService: CloudinaryService,
  ) {}

  async getAll(): Promise<Living[]> {
    return await this.LivingModel.find().exec()
  }

  async getOne(id: ObjectId): Promise<Living> {
    return await this.LivingModel.findById(id)
      .populate('region')
      .populate('author')
      .populate('layout')
      .populate('category')
      .exec()
  }

  async create(dto: CreateLivingDto): Promise<Living> {
    const photos = await Promise.all(
      dto.photos.map(
        async (item): Promise<string> =>
          (
            await this.cloudinaryService.uploadImage(item)
          ).url,
      ),
    )
    const living = await this.LivingModel.create({...dto, photos})
    await living.save()
    await this.userModel.findByIdAndUpdate(living.author, {
      $push: {products: living._id},
    })
    return living
  }

  async remove(id: ObjectId): Promise<ObjectId> {
    const Living = await this.LivingModel.findByIdAndDelete(id).exec()
    return Living._id
  }

  async search(body: ISearchBody): Promise<Living[]> {
    // Get all setting parametrs from given body object
    const {baths, beds, property, type, city} = body
    // Search for suitable Livings
    const regCity = new RegExp(city, 'ig')
    const max = +body.max || Number.MAX_VALUE
    const min = +body.min || Number.MIN_VALUE

    const condidate = await this.LivingModel.where('type', type)
      .where('city', regCity)
      .where('price')
      .lte(max)
      .gte(min)
      .where('property', property)
      .where('baths', baths)
      .where('beds', beds)
      .exec()

    return condidate
  }

  /**
   * Updating Living fields
   */
  async editLiving(id: string, dto: UpdateLivingDto) {
    const Living = await this.LivingModel.findById(id)
    if (!Living) {
      throw new HttpException('Living not found', HttpStatus.NOT_FOUND)
    }
    await Living.updateOne(dto).exec()
    return dto
  }
}
