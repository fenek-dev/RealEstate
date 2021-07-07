import {Args, Mutation, Query, Resolver} from '@nestjs/graphql'
import {Schema as MongooseSchema} from 'mongoose'
import {Category} from './category.model'
import {CategoryService} from './category.service'
import {CreateCategoryInput} from './category.inputs'

@Resolver(() => Category)
export class CategoryResolver {
  constructor(private categoryService: CategoryService) {}

  @Query(() => Category)
  async getCategoryById(
    @Args('_id', {type: () => String}) _id: MongooseSchema.Types.ObjectId,
  ) {
    return await this.categoryService.findOne(_id)
  }

  @Query(() => [Category])
  async getAllCategories() {
    return await this.categoryService.findAll()
  }

  @Mutation(() => Category)
  async createCategory(@Args('payload') payload: CreateCategoryInput) {
    return await this.categoryService.create(payload)
  }
}
