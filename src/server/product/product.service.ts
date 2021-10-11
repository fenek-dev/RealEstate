import {Injectable} from '@nestjs/common'
import {InjectModel} from '@nestjs/mongoose'
import {Model, ObjectId} from 'mongoose'
import {User, UserDocument} from '../user/user.model'
import {CloudinaryService} from '../cloudinary/cloudinary.service'
import {Product, ProductDocument} from './product.model'
import {CreateProductInput, SearchProductInput} from './product.inputs'
import {GraphQLError} from 'graphql'

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
    const result = await this.ProductModel.findById(id).exec()
    if (!result) throw new GraphQLError('Product nor found')
    return result
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
    const product = await this.ProductModel.findById(id).exec()
    const user = await this.userModel.findById(product?.author)

    await product.remove()
    await user.updateOne({
      $pull: {
        products: {_id: id},
      },
    })
    return product
  }

  async search(body: SearchProductInput): Promise<Product[]> {
    // Get all setting parametrs from given body object
    const {baths, beds, property, type, city, min, max} = body
    // Search for suitable Products
    const regCity = new RegExp(city, 'ig')

    const condidate = await this.ProductModel.where('type', type)
      .where('city', regCity)
      .where('price')
      .lte(max ?? Number.MAX_SAFE_INTEGER)
      .gte(min ?? Number.MIN_SAFE_INTEGER)
      .where('property', property)
      .where('baths')
      .lte(baths ?? Number.MAX_SAFE_INTEGER)
      .gte(baths ?? Number.MIN_SAFE_INTEGER)
      .where('beds')
      .lte(beds ?? Number.MAX_SAFE_INTEGER)
      .gte(beds ?? Number.MIN_SAFE_INTEGER)
      .exec()

    return condidate
  }
}
