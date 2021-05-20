import {Body, Delete, Get, Param, Patch, Post, UseGuards} from '@nestjs/common'
import {Controller} from '@nestjs/common'
import {ObjectId} from 'mongoose'
import {JwtAuthGuard} from '../auth/jwt/jwt-auth.guard'
import {CreateLivingDto} from './dto/create-living.dto'
import {EditLivingDto} from './dto/edit-living.dto'
import {LivingService} from './living.service'
import {ISearchBody} from './types'

@Controller('api/living')
export class LivingController {
  constructor(private livingServise: LivingService) {}

  /**
   * Get all living(houses) as an array
   */
  @Get()
  getAll() {
    return this.livingServise.getAll()
  }

  /**
   * Get one living by id
   */
  @Get(':id')
  getOne(@Param('id') id: ObjectId) {
    return this.livingServise.getOne(id)
  }

  /**
   * Create new living by given dto
   */
  @UseGuards(JwtAuthGuard)
  @Post('/create')
  create(@Body() dto: CreateLivingDto) {
    return this.livingServise.create(dto)
  }

  /**
   * Delete a living by id
   */
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: ObjectId) {
    return this.livingServise.remove(id)
  }

  /**
   * Search livings by given filter settings
   */
  @Post('/search')
  search(@Body() body: ISearchBody) {
    return this.livingServise.search(body)
  }

  /**
   * Edit living by given settings
   */
  @UseGuards(JwtAuthGuard)
  @Patch('/edit')
  edit(@Body() body: EditLivingDto) {
    return this.livingServise.editLiving(body)
  }
}
