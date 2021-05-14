import { Body, Delete, Get, Param, Post } from '@nestjs/common'
import { Controller } from '@nestjs/common'
import { ObjectId } from 'mongoose'
import { CreateProductDto } from './dto/create-product.dto'
import { ProductService } from './product.service'
import { ISearchBody } from './types'

@Controller('product')
export class ProductController {
  constructor(private productServise: ProductService) {}

  @Get()
  getAll() {
    return this.productServise.getAll()
  }

  @Get(':id')
  getOne(@Param('id') id: ObjectId) {
    return this.productServise.getOne(id)
  }

  @Post('/create')
  create(@Body() dto: CreateProductDto) {
    return this.productServise.create(dto)
  }

  @Delete(':id')
  remove(@Param('id') id: ObjectId) {
    return this.productServise.remove(id)
  }

  @Post('/search')
  search(@Body() body: ISearchBody) {
    return this.productServise.search(body)
  }
}
