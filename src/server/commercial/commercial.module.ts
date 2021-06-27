import {Module} from '@nestjs/common'
import {CommercialService} from './commercial.service'
import {CommercialController} from './commercial.controller'
import {MongooseModule} from '@nestjs/mongoose'
import {Commercial, CommercialSchema} from './schema/commercial.schema'
import {User, UserSchema} from '../auth/schema/user.schema'
import {CloudinaryService} from '../cloudinary/cloudinary.service'

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Commercial.name, schema: CommercialSchema},
      {name: User.name, schema: UserSchema},
    ]),
  ],
  controllers: [CommercialController],
  providers: [CommercialService, CloudinaryService],
})
export class CommercialModule {}
