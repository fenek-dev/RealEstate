import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common'
import {RegionService} from './region.service'
import {CreateRegionDto} from './dto/create-region.dto'
import {UpdateRegionDto} from './dto/update-region.dto'

@Controller('api/region')
export class RegionController {
  constructor(private readonly regionService: RegionService) {}

  @Get()
  findAll() {
    return this.regionService.findAll()
  }

  @Post('create')
  create(@Body() createRegionDto: CreateRegionDto) {
    return this.regionService.create(createRegionDto)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.regionService.findOne(id)
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateRegionDto: UpdateRegionDto) {
    return this.regionService.update(id, updateRegionDto)
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.regionService.remove(id)
  }
}
