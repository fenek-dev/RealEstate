import {Module} from '@nestjs/common'
import {LayoutService} from './layout.service'
import {LayoutController} from './layout.controller'
import {MongooseModule} from '@nestjs/mongoose'
import {Layout, LayoutSchema} from './schema/layout.schema'

@Module({
  imports: [
    MongooseModule.forFeature([{name: Layout.name, schema: LayoutSchema}]),
  ],
  controllers: [LayoutController],
  providers: [LayoutService],
})
export class LayoutModule {}
