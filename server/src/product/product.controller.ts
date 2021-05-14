import { Body, Delete, Get, Param, Post } from '@nestjs/common'
import { Controller } from '@nestjs/common'
import { CreateProductDto } from './dto/create-product.dto'

@Controller('product')
export class ProductController {
  @Get()
  getAll() {}

  @Get(':id')
  getOne(@Param('id') id: string) {}

  @Post('/create')
  create(@Body() body: CreateProductDto) {}

  @Delete(':id')
  remove(@Param('id') id: string) {}
}
