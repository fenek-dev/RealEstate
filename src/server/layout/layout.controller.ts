import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common'
import {LayoutService} from './layout.service'
import {CreateLayoutDto} from './dto/create-layout.dto'
import {UpdateLayoutDto} from './dto/update-layout.dto'

@Controller('api/layout')
export class LayoutController {
  constructor(private readonly layoutService: LayoutService) {}

  @Get()
  findAll() {
    return this.layoutService.findAll()
  }

  @Post('create')
  create(@Body() createLayoutDto: CreateLayoutDto) {
    return this.layoutService.create(createLayoutDto)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.layoutService.findOne(id)
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateLayoutDto: UpdateLayoutDto) {
    return this.layoutService.update(id, updateLayoutDto)
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.layoutService.remove(id)
  }
}
