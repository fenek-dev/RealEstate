import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommercialService } from './commercial.service';
import { CreateCommercialDto } from './dto/create-commercial.dto';
import { UpdateCommercialDto } from './dto/update-commercial.dto';

@Controller('commercial')
export class CommercialController {
  constructor(private readonly commercialService: CommercialService) {}

  @Post()
  create(@Body() createCommercialDto: CreateCommercialDto) {
    return this.commercialService.create(createCommercialDto);
  }

  @Get()
  findAll() {
    return this.commercialService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commercialService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommercialDto: UpdateCommercialDto) {
    return this.commercialService.update(+id, updateCommercialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commercialService.remove(+id);
  }
}
