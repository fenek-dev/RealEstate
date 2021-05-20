import {Module} from '@nestjs/common'
import {CommercialService} from './commercial.service'
import {CommercialController} from './commercial.controller'
import {MongooseModule} from '@nestjs/mongoose'
import {Commercial, CommercialSchema} from './schema/commercial.schema'

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Commercial.name, schema: CommercialSchema},
    ]),
  ],
  controllers: [CommercialController],
  providers: [CommercialService],
})
export class CommercialModule {}
