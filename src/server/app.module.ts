import {Module} from '@nestjs/common'
import {ProductModule} from './product/product.module'
import {MongooseModule} from '@nestjs/mongoose'
import {ConfigModule} from '@nestjs/config'
import {AuthModule} from './auth/auth.module'
import {ViewModule} from './view/view.module'
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    ProductModule,
    AuthModule,
    ViewModule,
  ],
})
export class AppModule {}
