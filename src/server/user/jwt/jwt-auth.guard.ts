import {AuthGuard} from '@nestjs/passport'
import {Injectable, ExecutionContext} from '@nestjs/common'
import {GqlExecutionContext} from '@nestjs/graphql'
import {ExecutionContextHost} from '@nestjs/core/helpers/execution-context-host'
import {AuthenticationError} from 'apollo-server-core'

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor() {
    super()
  }

  canActivate(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context)
    const {req} = ctx.getContext()
    return super.canActivate(new ExecutionContextHost([req]))
  }

  handleRequest(err: any, user: any) {
    if (err || !user) {
      throw err || new AuthenticationError('Authorization token is incorrect')
    }
    return user
  }
}
