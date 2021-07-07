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
import {GraphQLModule} from '@nestjs/graphql'

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI, {useFindAndModify: false}),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      sortSchema: true,
      playground: true,
      debug: false,
      context: ({req}) => ({req}),
    }),
    ProductModule,
    CategoryModule,
    LayoutModule,
    RegionModule,
    AuthModule,
    // ViewModule,
    CloudinaryModule,
  ],
})
export class AppModule {}
