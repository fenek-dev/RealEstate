import {
  Args,
  Mutation,
  Query,
  Resolver,
  ResolveField,
  Parent,
  Int,
} from '@nestjs/graphql'
import {Schema as MongooseSchema} from 'mongoose'
import {Product, ProductDocument} from './product.model'
import {ProductService} from './product.service'
import {CreateProductInput} from './product.inputs'
import {User} from '../user/user.model'
import {Region} from '../region/region.model'
import {Category} from '../category/category.model'
import {UseGuards} from '@nestjs/common'
import {JwtAuthGuard} from '../user/jwt/jwt-auth.guard'
import {Layout} from '../layout/layout.model'

@Resolver(() => Product)
export class ProductResolver {
  constructor(private productService: ProductService) {}

  @Query(() => Product)
  async getProductById(
    @Args('_id', {type: () => String}) _id: MongooseSchema.Types.ObjectId,
  ) {
    return await this.productService.findOne(_id)
  }

  @Query(() => [Product])
  async getAllProducts() {
    return await this.productService.findAll()
  }

  @Mutation(() => Product)
  @UseGuards(JwtAuthGuard)
  async createProduct(@Args('payload') payload: CreateProductInput) {
    return await this.productService.create(payload)
  }

  @Mutation(() => Product)
  @UseGuards(JwtAuthGuard)
  async deleteProduct(
    @Args('_id', {type: () => String}) _id: MongooseSchema.Types.ObjectId,
  ) {
    return await this.productService.delete(_id)
  }

  @Query(() => [Product], {defaultValue: []})
  async searchProduct(
    @Args('city', {type: () => String, nullable: true}) city: string,
    @Args('type', {type: () => String, nullable: true}) type: string,
    @Args('property', {type: () => String, nullable: true}) property: string,
    @Args('min', {
      type: () => Int,
      nullable: true,
    })
    min: number,
    @Args('max', {
      type: () => Int,
      nullable: true,
    })
    max: number,
    @Args('beds', {type: () => Int, nullable: true}) beds: number,
    @Args('baths', {type: () => Int, nullable: true}) baths: number,
  ) {
    return await this.productService.search({
      city,
      type,
      property,
      min,
      max,
      beds,
      baths,
    })
  }

  @ResolveField()
  async author(
    @Parent() product: ProductDocument,
    @Args('populate') populate: boolean,
  ) {
    if (populate)
      await product.populate({path: 'author', model: User.name}).execPopulate()

    return product.author
  }

  @ResolveField()
  async region(
    @Parent() product: ProductDocument,
    @Args('populate') populate: boolean,
  ) {
    if (populate)
      await product
        .populate({path: 'region', model: Region.name})
        .execPopulate()

    return product.region
  }

  @ResolveField()
  async layout(
    @Parent() product: ProductDocument,
    @Args('populate') populate: boolean,
  ) {
    if (populate)
      await product
        .populate({path: 'layout', model: Layout.name})
        .execPopulate()

    return product.layout
  }

  @ResolveField()
  async category(
    @Parent() product: ProductDocument,
    @Args('populate') populate: boolean,
  ) {
    if (populate)
      await product
        .populate({path: 'category', model: Category.name})
        .execPopulate()

    return product.category
  }
}
