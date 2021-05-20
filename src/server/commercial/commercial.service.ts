import {Injectable} from '@nestjs/common'
import {InjectModel} from '@nestjs/mongoose'
import {Model} from 'mongoose'
import {CreateCommercialDto} from './dto/create-commercial.dto'
import {UpdateCommercialDto} from './dto/update-commercial.dto'
import {Commercial, CommercialDocument} from './schema/commercial.schema'

@Injectable()
export class CommercialService {
  constructor(
    @InjectModel(Commercial.name)
    private commercialModel: Model<CommercialDocument>,
  ) {}

  async create(createCommercialDto: CreateCommercialDto) {
    const commercial = await this.commercialModel.create(createCommercialDto)
    await commercial.save()
    return commercial
  }

  async getAll() {
    return await this.commercialModel.find().exec()
  }

  async findOne(id: string) {
    return await this.commercialModel.findById(id).exec()
  }

  async update(id: string, updateCommercialDto: UpdateCommercialDto) {
    return await this.commercialModel
      .findByIdAndUpdate(id, updateCommercialDto)
      .exec()
  }

  async remove(id: string) {
    return await this.commercialModel.findByIdAndDelete(id).exec()
  }
}
