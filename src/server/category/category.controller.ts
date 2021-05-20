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
import {CategoryService} from './category.service'
import {CreateCategoryDto} from './dto/create-category.dto'
import {UpdateCategoryDto} from './dto/update-category.dto'

@Controller('api/category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get()
  getAll() {
    return this.categoryService.findAll()
  }

  @UseGuards(JwtAuthGuard)
  @Post('create')
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto)
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(id)
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoryService.update(id, updateCategoryDto)
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(id)
  }
}
