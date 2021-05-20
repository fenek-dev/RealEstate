import {Module} from '@nestjs/common'
import {LivingModule} from './living/living.module'
import {MongooseModule} from '@nestjs/mongoose'
import {ConfigModule} from '@nestjs/config'
import {AuthModule} from './auth/auth.module'
import {ViewModule} from './view/view.module'
import {CommercialModule} from './commercial/commercial.module'
import {CategoryModule} from './category/category.module'
import {LayoutModule} from './layout/layout.module'
import {RegionModule} from './region/region.module'
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    CommercialModule,
    CategoryModule,
    LayoutModule,
    LivingModule,
    AuthModule,
    ViewModule,
    RegionModule,
  ],
})
export class AppModule {}
