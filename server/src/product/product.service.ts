import { Body, Delete, Get, Injectable, Param, Post } from '@nestjs/common'
import { CreateProductDto } from './dto/create-product.dto'

@Injectable()
export class ProductService {
  async getAll() {}

  async getOne(id: string) {}

  async create(dto: CreateProductDto) {}

  async remove(id: string) {}
}
