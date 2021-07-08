import {
  Args,
  GqlExecutionContext,
  Mutation,
  Query,
  Resolver,
} from '@nestjs/graphql'
import {Schema as MongooseSchema} from 'mongoose'

import {User} from './user.model'
import {UserService} from './user.service'
import {CreateUserInput, UpdateUserInput} from './user.inputs'
import {createParamDecorator, UseGuards} from '@nestjs/common'
import {JwtAuthGuard} from './jwt/jwt-auth.guard'

const CurrentUser = createParamDecorator((data, req) => {
  const ctx = GqlExecutionContext.create(req).getContext()
  return ctx.req.user
})

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => User)
  @UseGuards(JwtAuthGuard)
  async token(@CurrentUser() user: User) {
    return user
  }

  @Query(() => User)
  async loginUser(
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    return await this.userService.login(email, password)
  }

  @Query(() => User)
  async findUserById(
    @Args('_id', {type: () => String}) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.userService.findById(_id)
  }

  @Mutation(() => User)
  async createUser(@Args('payload') payload: CreateUserInput) {
    return this.userService.create(payload)
  }

  @Mutation(() => User)
  @UseGuards(JwtAuthGuard)
  async updateUser(@Args('payload') payload: UpdateUserInput) {
    return this.userService.update(payload)
  }
}
