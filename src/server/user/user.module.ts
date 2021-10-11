import {Module} from '@nestjs/common'
import {UserService} from './user.service'
import {PassportModule} from '@nestjs/passport'
import {JwtModule} from '@nestjs/jwt'
import {JwtStrategy} from './jwt/jwt.strategy'
import {ConfigModule} from '@nestjs/config'
import {MongooseModule} from '@nestjs/mongoose'
import {User, UserSchema} from './user.model'
import {CloudinaryService} from '../cloudinary/cloudinary.service'
import {UserResolver} from './user.resolver'

@Module({
  imports: [
    MongooseModule.forFeature([{name: User.name, schema: UserSchema}]),
    ConfigModule.forRoot(),
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {expiresIn: '30d'},
    }),
  ],
  providers: [UserService, JwtStrategy, CloudinaryService, UserResolver],
})
export class AuthModule {}
