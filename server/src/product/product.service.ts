import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, ObjectId } from 'mongoose'
import { CreateProductDto } from './dto/create-product.dto'
import { Product, ProductDocument } from './schema/product.schema'

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async getAll(): Promise<Product[]> {
    return await this.productModel.find().exec()
  }

  async getOne(id: ObjectId): Promise<Product> {
    return await this.productModel.findById(id).exec()
  }

  async create(dto: CreateProductDto): Promise<Product> {
    return await (await this.productModel.create({ ...dto })).save()
  }

  async remove(id: ObjectId): Promise<ObjectId> {
    const product = await this.productModel.findByIdAndDelete(id)
    return product._id
  }
}
