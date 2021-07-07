import {Args, Mutation, Query, Resolver} from '@nestjs/graphql'
import {Schema as MongooseSchema} from 'mongoose'
import {LayoutService} from './layout.service'
import {Layout} from './layout.model'
import {CreateLayoutInput} from './layout.inputs'

@Resolver(() => Layout)
export class LayoutResolver {
  constructor(private layoutService: LayoutService) {}

  @Query(() => Layout)
  async getLayoutById(
    @Args('_id', {type: () => String}) _id: MongooseSchema.Types.ObjectId,
  ) {
    return await this.layoutService.findOne(_id)
  }

  @Query(() => [Layout])
  async getAllLayouts() {
    return await this.layoutService.findAll()
  }

  @Mutation(() => Layout)
  async createCategory(@Args('payload') payload: CreateLayoutInput) {
    return await this.layoutService.create(payload)
  }
}
