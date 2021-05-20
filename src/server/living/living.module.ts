import {Module} from '@nestjs/common'
import {LivingController} from './living.controller'
import {LivingService} from './living.service'
import {MongooseModule} from '@nestjs/mongoose'
import {Living, LivingSchema} from './schema/living.schema'
@Module({
  imports: [
    MongooseModule.forFeature([{name: Living.name, schema: LivingSchema}]),
  ],
  controllers: [LivingController],
  providers: [LivingService],
})
export class LivingModule {}
