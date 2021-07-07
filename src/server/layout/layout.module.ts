import {Module} from '@nestjs/common'
import {LayoutService} from './layout.service'
import {MongooseModule} from '@nestjs/mongoose'
import {Layout, LayoutSchema} from './layout.model'
import {LayoutResolver} from './layout.resolver'

@Module({
  imports: [
    MongooseModule.forFeature([{name: Layout.name, schema: LayoutSchema}]),
  ],
  providers: [LayoutService, LayoutResolver],
})
export class LayoutModule {}
