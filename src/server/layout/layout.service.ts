import { Injectable } from '@nestjs/common';
import { CreateLayoutDto } from './dto/create-layout.dto';
import { UpdateLayoutDto } from './dto/update-layout.dto';

@Injectable()
export class LayoutService {
  create(createLayoutDto: CreateLayoutDto) {
    return 'This action adds a new layout';
  }

  findAll() {
    return `This action returns all layout`;
  }

  findOne(id: number) {
    return `This action returns a #${id} layout`;
  }

  update(id: number, updateLayoutDto: UpdateLayoutDto) {
    return `This action updates a #${id} layout`;
  }

  remove(id: number) {
    return `This action removes a #${id} layout`;
  }
}
