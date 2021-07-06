import {Module} from '@nestjs/common'
import {ProductModule} from './product/product.module'
import {MongooseModule} from '@nestjs/mongoose'
import {ConfigModule} from '@nestjs/config'
import {AuthModule} from './user/user.module'
import {ViewModule} from './view/view.module'
import {CategoryModule} from './category/category.module'
import {LayoutModule} from './layout/layout.module'
import {RegionModule} from './region/region.module'
import {CloudinaryModule} from './cloudinary/cloudinary.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI, {useFindAndModify: false}),
    ProductModule,
    CategoryModule,
    LayoutModule,
    RegionModule,
    AuthModule,
    ViewModule,
    CloudinaryModule,
  ],
})
export class AppModule {}
