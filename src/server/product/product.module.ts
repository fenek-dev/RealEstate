import {Module} from '@nestjs/common'
import {ProductService} from './product.service'
import {MongooseModule} from '@nestjs/mongoose'
import {Product, ProductSchema} from './product.model'
import {User, UserSchema} from '../user/user.model'
import {CloudinaryService} from '../cloudinary/cloudinary.service'
import {ProductResolver} from './product.resolver'
@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Product.name, schema: ProductSchema},
      {name: User.name, schema: UserSchema},
    ]),
  ],
  providers: [ProductService, CloudinaryService, ProductResolver],
})
export class ProductModule {}
