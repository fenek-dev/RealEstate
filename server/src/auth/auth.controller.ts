import { Body, Controller, Get, Post, UseGuards, Request } from '@nestjs/common'
import { AuthService } from './auth.service'
import { CreateUserDto } from './dto/create-user.dto'
import { JwtAuthGuard } from './jwt/jwt-auth.guard'
import { IEmailAndPassword } from './types'

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() body: IEmailAndPassword) {
    const { email, password } = body
    return this.authService.login(email, password)
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    const user = req.user
    return this.authService.findOne(user.email)
  }

  @Post('register')
  create(@Body() body: CreateUserDto) {
    return this.authService.create(body)
  }
}
