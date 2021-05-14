import { Module } from '@nestjs/common'
import { ProductModule } from './product/product.module'
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule } from '@nestjs/config'
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    ProductModule,
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
