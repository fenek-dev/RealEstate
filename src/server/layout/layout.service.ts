import {Injectable} from '@nestjs/common'
import {InjectModel} from '@nestjs/mongoose'
import {Model, Schema as MongooseSchema} from 'mongoose'
import {CreateLayoutInput} from './layout.inputs'
import {Layout, LayoutDocument} from './layout.model'

@Injectable()
export class LayoutService {
  constructor(
    @InjectModel(Layout.name)
    private layoutModel: Model<LayoutDocument>,
  ) {}

  async create(createLayoutDto: CreateLayoutInput) {
    const layout = await this.layoutModel.create(createLayoutDto)
    await layout.save()
    return layout
  }

  async findAll() {
    return await this.layoutModel.find().exec()
  }

  async findOne(id: MongooseSchema.Types.ObjectId) {
    return await this.layoutModel.findById(id).exec()
  }
}
