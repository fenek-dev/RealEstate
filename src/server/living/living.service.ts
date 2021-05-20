import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {InjectModel} from '@nestjs/mongoose'
import {Model, ObjectId} from 'mongoose'
import {CreateLivingDto} from './dto/create-living.dto'
import {EditLivingDto} from './dto/edit-living.dto'
import {Living, LivingDocument} from './schema/living.schema'
import {ISearchBody} from './types'

@Injectable()
export class LivingService {
  constructor(
    @InjectModel(Living.name) private LivingModel: Model<LivingDocument>,
  ) {}

  async getAll(): Promise<Living[]> {
    return await this.LivingModel.find().exec()
  }

  async getOne(id: ObjectId): Promise<Living> {
    return await this.LivingModel.findById(id).exec()
  }

  async create(dto: CreateLivingDto): Promise<Living> {
    return await (await this.LivingModel.create({...dto})).save()
  }

  async remove(id: ObjectId): Promise<ObjectId> {
    const Living = await this.LivingModel.findByIdAndDelete(id).exec()
    return Living._id
  }

  async search(body: ISearchBody): Promise<Living[]> {
    // Get all setting parametrs from given body object
    const {baths, beds, max, min, area, location, type} = body
    // Create regular expresstion by given location name
    const reg = new RegExp(location, 'i')
    // Search for suitable Livings
    const condidate = await this.LivingModel.where('type', type)
      .where('location', reg)
      .where('price')
      .lte(max)
      .gte(min)
      .where('area', area)
      .where('baths', baths)
      .where('beds', beds)
      .exec()
    return condidate
  }

  /**
   * Updating Living fields
   */
  async editLiving(dto: EditLivingDto) {
    const {_id, ...props} = dto
    const Living = await this.LivingModel.findById(_id)
    if (!Living) {
      throw new HttpException('Living not found', HttpStatus.NOT_FOUND)
    }
    await Living.updateOne({$set: {...props}}).exec()
    return dto
  }
}