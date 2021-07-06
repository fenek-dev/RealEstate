import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
  Patch,
} from '@nestjs/common'
import {AuthService} from './user.service'
import {CreateUserDto} from './dto/create-user.dto'
import {UpdateUserDto} from './dto/update-user.dto'
import {JwtAuthGuard} from './jwt/jwt-auth.guard'
import {IEmailAndPassword} from './types'

@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  /**
   * Login by email and password without token
   */
  @Post('login')
  login(@Body() body: IEmailAndPassword) {
    const {email, password} = body
    return this.authService.login(email, password)
  }

  /**
   * Login by token
   */
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    const user = req.user
    return this.authService.findOne(user.email)
  }

  /**
   * Registrate user
   */
  @Post('register')
  create(@Body() body: CreateUserDto) {
    return this.authService.create(body)
  }

  @UseGuards(JwtAuthGuard)
  @Patch('profile')
  updateProfile(@Body() body: UpdateUserDto) {
    return this.authService.update(body)
  }

  @Post('avatar')
  addAvatar(@Body() body) {
    return this.authService.upload(body.file, body.id)
  }
}
