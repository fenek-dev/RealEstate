import {Injectable} from '@nestjs/common'
import {InjectModel} from '@nestjs/mongoose'
import {Model, ObjectId} from 'mongoose'
import {User, UserDocument} from '../user/user.model'
import {CloudinaryService} from '../cloudinary/cloudinary.service'
import {Product, ProductDocument} from './product.model'
import {ISearchBody} from './types'
import {CreateProductInput} from './product.inputs'

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private ProductModel: Model<ProductDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private cloudinaryService: CloudinaryService,
  ) {}

  async findAll(): Promise<Product[]> {
    return await this.ProductModel.find().exec()
  }

  async findOne(id: ObjectId) {
    return await this.ProductModel.findById(id).exec()
  }

  async create(dto: CreateProductInput) {
    const photos = await Promise.all(
      dto.photos.map(
        async (item): Promise<string> =>
          (
            await this.cloudinaryService.uploadImage(item)
          ).url,
      ),
    )
    const product = await this.ProductModel.create({
      ...dto,
      photos,
      date: Date.now(),
    })
    await product.save()
    await this.userModel.findByIdAndUpdate(product.author, {
      $push: {products: product._id},
    })
    return product
  }

  async delete(id: ObjectId) {
    const product = await this.ProductModel.findByIdAndDelete(id).exec()
    return product
  }

  async search(body: ISearchBody): Promise<Product[]> {
    // Get all setting parametrs from given body object
    const {
      baths,
      beds,
      property,
      type,
      city,
      min = Number.MIN_SAFE_INTEGER,
      max = Number.MAX_SAFE_INTEGER,
    } = body
    // Search for suitable Products
    const regCity = new RegExp(city, 'ig')

    const condidate = await this.ProductModel.where('type', type)
      .where('city', regCity)
      .where('price')
      .lte(max)
      .gte(min)
      .where('property', property)
      .where('baths')
      .lte(baths || Number.MAX_VALUE)
      .gte(baths || Number.MIN_VALUE)
      .where('beds')
      .lte(beds || Number.MAX_VALUE)
      .gte(beds || Number.MIN_VALUE)
      .exec()

    return condidate
  }
}
