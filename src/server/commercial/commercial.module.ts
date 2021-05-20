import { Module } from '@nestjs/common';
import { CommercialService } from './commercial.service';
import { CommercialController } from './commercial.controller';

@Module({
  controllers: [CommercialController],
  providers: [CommercialService]
})
export class CommercialModule {}
