import {Module} from '@nestjs/common'
import {ProductController} from './product.controller'
import {ProductService} from './product.service'
import {MongooseModule} from '@nestjs/mongoose'
import {Product, ProductSchema} from './schema/product.schema'
import {User, UserSchema} from '../user/user.model'
import {CloudinaryService} from '../cloudinary/cloudinary.service'
@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Product.name, schema: ProductSchema},
      {name: User.name, schema: UserSchema},
    ]),
  ],
  controllers: [ProductController],
  providers: [ProductService, CloudinaryService],
})
export class ProductModule {}
