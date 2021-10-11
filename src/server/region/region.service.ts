import {Injectable} from '@nestjs/common'
import {InjectModel} from '@nestjs/mongoose'
import {Model, Schema} from 'mongoose'
import {CreateRegionInput} from './region.inputs'
import {Region, RegionDocument} from './region.model'

@Injectable()
export class RegionService {
  constructor(
    @InjectModel(Region.name)
    private regionModel: Model<RegionDocument>,
  ) {}

  async create(createRegionDto: CreateRegionInput) {
    const region = await this.regionModel.create(createRegionDto)
    await region.save()
    return region
  }

  async findAll() {
    return await this.regionModel.find().exec()
  }

  async findOne(id: Schema.Types.ObjectId) {
    return await this.regionModel.findById(id).exec()
  }
}
