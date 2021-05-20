import {Injectable} from '@nestjs/common'
import {InjectModel} from '@nestjs/mongoose'
import {Model} from 'mongoose'
import {CreateRegionDto} from './dto/create-region.dto'
import {UpdateRegionDto} from './dto/update-region.dto'
import {Region, RegionDocument} from './schema/region.schema'

@Injectable()
export class RegionService {
  constructor(
    @InjectModel(Region.name)
    private regionModel: Model<RegionDocument>,
  ) {}

  async create(createRegionDto: CreateRegionDto) {
    const region = await this.regionModel.create(createRegionDto)
    await region.save()
    return region
  }

  async findAll() {
    return await this.regionModel.find().exec()
  }

  async findOne(id: string) {
    return await this.regionModel.findById(id).exec()
  }

  async update(id: string, updateRegionDto: UpdateRegionDto) {
    return await this.regionModel.findByIdAndUpdate(id, updateRegionDto)
  }

  async remove(id: string) {
    return await this.regionModel.findByIdAndRemove(id)
  }
}
