import {Injectable} from '@nestjs/common'
import {InjectModel} from '@nestjs/mongoose'
import {Model} from 'mongoose'
import {CreateLayoutDto} from './dto/create-layout.dto'
import {UpdateLayoutDto} from './dto/update-layout.dto'
import {Layout, LayoutDocument} from './schema/layout.schema'

@Injectable()
export class LayoutService {
  constructor(
    @InjectModel(Layout.name)
    private layoutModel: Model<LayoutDocument>,
  ) {}

  async create(createLayoutDto: CreateLayoutDto) {
    const layout = await this.layoutModel.create(createLayoutDto)
    await layout.save()
    return layout
  }

  async findAll() {
    return await this.layoutModel.find().exec()
  }

  async findOne(id: string) {
    return await this.layoutModel.findById(id).exec()
  }

  async update(id: string, updateLayoutDto: UpdateLayoutDto) {
    return await this.layoutModel.findByIdAndUpdate(id, updateLayoutDto)
  }

  async remove(id: string) {
    return await this.layoutModel.findByIdAndRemove(id)
  }
}
