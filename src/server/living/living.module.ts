import {Module} from '@nestjs/common'
import {LivingController} from './living.controller'
import {LivingService} from './living.service'
import {MongooseModule} from '@nestjs/mongoose'
import {Living, LivingSchema} from './schema/living.schema'
import {User, UserSchema} from '../auth/schema/user.schema'
import {CloudinaryService} from '../cloudinary/cloudinary.service'
@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Living.name, schema: LivingSchema},
      {name: User.name, schema: UserSchema},
    ]),
  ],
  controllers: [LivingController],
  providers: [LivingService, CloudinaryService],
})
export class LivingModule {}
