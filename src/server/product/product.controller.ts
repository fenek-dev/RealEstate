import { Body, Delete, Get, Param, Post } from '@nestjs/common'
import { Controller } from '@nestjs/common'
import { ObjectId } from 'mongoose'
import { CreateProductDto } from './dto/create-product.dto'
import { EditProductDto } from './dto/edit-product.dto'
import { ProductService } from './product.service'
import { ISearchBody } from './types'

@Controller('product')
export class ProductController {
  constructor(private productServise: ProductService) {}

  /**
   * Get all products(houses) as an array
   */
  @Get()
  getAll() {
    return this.productServise.getAll()
  }

  /**
   * Get one product by id
   */
  @Get(':id')
  getOne(@Param('id') id: ObjectId) {
    return this.productServise.getOne(id)
  }

  /**
   * Create new product by given dto
   */
  @Post('/create')
  create(@Body() dto: CreateProductDto) {
    return this.productServise.create(dto)
  }

  /**
   * Delete a product by id
   */
  @Delete(':id')
  remove(@Param('id') id: ObjectId) {
    return this.productServise.remove(id)
  }

  /**
   * Search products by given filter settings
   */
  @Post('/search')
  search(@Body() body: ISearchBody) {
    return this.productServise.search(body)
  }

  /**
   * Edit product by given settings
   */
  @Post('/edit')
  edit(@Body() body: EditProductDto) {
    return this.productServise.editProduct(body)
  }
}
