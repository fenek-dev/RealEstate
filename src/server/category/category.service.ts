import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {InjectModel} from '@nestjs/mongoose'
import {Model, Schema as MongooseSchema} from 'mongoose'
import {CreateCategoryInput} from './category.inputs'
import {Category, CategoryDocument} from './category.model'

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
  ) {}

  async create(input: CreateCategoryInput) {
    const category = await this.categoryModel.create(input)
    category.save()
    return category
  }

  async findAll() {
    return await this.categoryModel.find().exec()
  }

  async findOne(id: MongooseSchema.Types.ObjectId) {
    const category = await this.categoryModel.findById(id).exec()
    if (!category) {
      throw new HttpException('Category not found', HttpStatus.NOT_FOUND)
    }
    return category
  }
}
