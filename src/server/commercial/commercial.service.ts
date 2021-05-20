import { Injectable } from '@nestjs/common';
import { CreateCommercialDto } from './dto/create-commercial.dto';
import { UpdateCommercialDto } from './dto/update-commercial.dto';

@Injectable()
export class CommercialService {
  create(createCommercialDto: CreateCommercialDto) {
    return 'This action adds a new commercial';
  }

  findAll() {
    return `This action returns all commercial`;
  }

  findOne(id: number) {
    return `This action returns a #${id} commercial`;
  }

  update(id: number, updateCommercialDto: UpdateCommercialDto) {
    return `This action updates a #${id} commercial`;
  }

  remove(id: number) {
    return `This action removes a #${id} commercial`;
  }
}
