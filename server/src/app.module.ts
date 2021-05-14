import { Module } from '@nestjs/common'
import { ProductModule } from './product/product.module'
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule } from '@nestjs/config'
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    ProductModule,
  ],
})
export class AppModule {}
