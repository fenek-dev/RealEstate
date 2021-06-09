import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common'
import {JwtAuthGuard} from '../auth/jwt/jwt-auth.guard'
import {CommercialService} from './commercial.service'
import {CreateCommercialDto} from './dto/create-commercial.dto'
import {UpdateCommercialDto} from './dto/update-commercial.dto'

@Controller('api/commercial')
export class CommercialController {
  constructor(private commercialService: CommercialService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getAll() {
    return this.commercialService.getAll()
  }

  @UseGuards(JwtAuthGuard)
  @Post('create')
  create(@Body() createCommercialDto: CreateCommercialDto) {
    return this.commercialService.create(createCommercialDto)
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commercialService.findOne(id)
  }

  @UseGuards(JwtAuthGuard)
  @Patch('update/:id')
  update(
    @Param('id') id: string,
    @Body() updateCommercialDto: UpdateCommercialDto,
  ) {
    return this.commercialService.update(id, updateCommercialDto)
  }

  @UseGuards(JwtAuthGuard)
  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.commercialService.remove(id)
  }
}
