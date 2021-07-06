import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {InjectModel} from '@nestjs/mongoose'
import {Model, ObjectId} from 'mongoose'
import {User, UserDocument} from '../user/schema/user.schema'
import {CloudinaryService} from '../cloudinary/cloudinary.service'
import {CreateProductDto} from './dto/create-product.dto'
import {UpdateProductDto} from './dto/update-product.dto'
import {Product, ProductDocument} from './schema/product.schema'
import {ISearchBody} from './types'

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private ProductModel: Model<ProductDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private cloudinaryService: CloudinaryService,
  ) {}

  async getAll(): Promise<Product[]> {
    return await this.ProductModel.find().exec()
  }

  async getOne(id: ObjectId): Promise<Product> {
    return await this.ProductModel.findById(id)
      .populate('region')
      .populate('author')
      .populate('layout')
      .populate('category')
      .exec()
  }

  async create(dto: CreateProductDto): Promise<Product> {
    const photos = await Promise.all(
      dto.photos.map(
        async (item): Promise<string> =>
          (
            await this.cloudinaryService.uploadImage(item)
          ).url,
      ),
    )
    const living = await this.ProductModel.create({...dto, photos})
    await living.save()
    await this.userModel.findByIdAndUpdate(living.author, {
      $push: {products: living._id},
    })
    return living
  }

  async remove(id: ObjectId): Promise<ObjectId> {
    const Product = await this.ProductModel.findByIdAndDelete(id).exec()
    return Product._id
  }

  async search(body: ISearchBody): Promise<Product[]> {
    // Get all setting parametrs from given body object
    const {baths, beds, property, type, city} = body
    // Search for suitable Products
    const regCity = new RegExp(city, 'ig')
    const max = +body.max || Number.MAX_VALUE
    const min = +body.min || Number.MIN_VALUE

    const condidate = await this.ProductModel.where('type', type)
      .where('city', regCity)
      .where('price')
      .lte(max)
      .gte(min)
      .where('property', property)
      .where('baths')
      .lte(baths || max)
      .gte(baths || min)
      .where('beds')
      .lte(beds || max)
      .gte(beds || min)
      .exec()

    return condidate
  }

  /**
   * Updating Product fields
   */
  async editProduct(id: string, dto: UpdateProductDto) {
    const Product = await this.ProductModel.findById(id)
    if (!Product) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND)
    }
    await Product.updateOne(dto).exec()
    return dto
  }
}
