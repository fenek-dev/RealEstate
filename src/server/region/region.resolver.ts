import {Args, Mutation, Query, Resolver} from '@nestjs/graphql'
import {Schema as MongooseSchema} from 'mongoose'
import {Region} from './region.model'
import {CreateRegionInput} from './region.inputs'
import {RegionService} from './region.service'
import {UseGuards} from '@nestjs/common'
import {JwtAuthGuard} from '../user/jwt/jwt-auth.guard'

@Resolver(() => Region)
export class RegionResolver {
  constructor(private regionService: RegionService) {}

  @Query(() => Region)
  async getRegionById(
    @Args('_id', {type: () => String}) _id: MongooseSchema.Types.ObjectId,
  ) {
    return await this.regionService.findOne(_id)
  }

  @Query(() => [Region])
  async getAllRegions() {
    return await this.regionService.findAll()
  }

  @Mutation(() => Region)
  @UseGuards(JwtAuthGuard)
  async createRegion(@Args('payload') payload: CreateRegionInput) {
    return await this.regionService.create(payload)
  }
}
