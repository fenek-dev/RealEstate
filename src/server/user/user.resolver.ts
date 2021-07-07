import {Args, Mutation, Query, Resolver} from '@nestjs/graphql'
import {Schema as MongooseSchema} from 'mongoose'

import {User} from './user.model'
import {UserService} from './user.service'
import {CreateUserInput, UpdateUserInput} from './user.inputs'
import {UseGuards} from '@nestjs/common'
import {JwtAuthGuard} from './jwt/jwt-auth.guard'

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => User)
  async login(
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    return await this.userService.login(email, password)
  }

  @Query(() => User)
  async person(
    @Args('_id', {type: () => String}) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.userService.findById(_id)
  }

  @Mutation(() => User)
  async createPerson(@Args('payload') payload: CreateUserInput) {
    return this.userService.create(payload)
  }

  @Mutation(() => User)
  @UseGuards(JwtAuthGuard)
  async updatePerson(@Args('payload') payload: UpdateUserInput) {
    return this.userService.update(payload)
  }
}
