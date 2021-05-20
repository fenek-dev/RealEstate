import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {InjectModel} from '@nestjs/mongoose'
import {Model} from 'mongoose'
import {CreateCategoryDto} from './dto/create-category.dto'
import {UpdateCategoryDto} from './dto/update-category.dto'
import {Category, CategoryDocument} from './schema/category.schema'

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
  ) {}

  async create(dto: CreateCategoryDto) {
    const category = await this.categoryModel.create(dto)
    category.save()
    return category
  }

  async findAll() {
    return await this.categoryModel.find().exec()
  }

  async findOne(id: string) {
    const category = await this.categoryModel.findById(id).exec()
    if (!category) {
      throw new HttpException('Category not found', HttpStatus.NOT_FOUND)
    }
    return category
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.categoryModel
      .findByIdAndUpdate(id, updateCategoryDto)
      .exec()
    category.save()
    return category
  }

  async remove(id: string) {
    return await this.categoryModel.findByIdAndRemove(id).exec()
  }
}
