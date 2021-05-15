import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, ObjectId } from 'mongoose'
import { CreateProductDto } from './dto/create-product.dto'
import { EditProductDto } from './dto/edit-product.dto'
import { Product, ProductDocument } from './schema/product.schema'
import { ISearchBody } from './types'

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
    const product = await this.productModel.findByIdAndDelete(id).exec()
    return product._id
  }

  async search(body: ISearchBody): Promise<Product[]> {
    // Get all setting parametrs from given body object
    const { baths, beds, max, min, area, location, type } = body
    // Create regular expresstion by given location name
    const reg = new RegExp(location, 'i')
    // Search for suitable products
    const condidate = await this.productModel
      .where('type', type)
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
   * Updating product fields
   */
  async editProduct(dto: EditProductDto) {
    const { _id, ...props } = dto
    const product = await this.productModel.findById(_id)
    if (!product) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND)
    }
    await product.updateOne({ $set: { ...props } }).exec()
    return dto
  }
}
