import { Module } from '@nestjs/common';
import { LayoutService } from './layout.service';
import { LayoutController } from './layout.controller';

@Module({
  controllers: [LayoutController],
  providers: [LayoutService]
})
export class LayoutModule {}
