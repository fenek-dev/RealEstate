import {Module} from '@nestjs/common'
import {CategoryService} from './category.service'
import {MongooseModule} from '@nestjs/mongoose'
import {Category, CategorySchema} from './category.model'
import {CategoryResolver} from './category.resolver'

@Module({
  imports: [
    MongooseModule.forFeature([{name: Category.name, schema: CategorySchema}]),
  ],
  providers: [CategoryService, CategoryResolver],
})
export class CategoryModule {}
