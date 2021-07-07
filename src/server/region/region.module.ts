import {Module} from '@nestjs/common'
import {RegionService} from './region.service'
import {MongooseModule} from '@nestjs/mongoose'
import {Region, RegionSchema} from './region.model'
import {RegionResolver} from './region.resolver'

@Module({
  imports: [
    MongooseModule.forFeature([{name: Region.name, schema: RegionSchema}]),
  ],
  providers: [RegionService, RegionResolver],
})
export class RegionModule {}
