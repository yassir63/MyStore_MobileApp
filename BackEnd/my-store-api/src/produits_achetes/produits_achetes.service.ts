import { Injectable } from '@nestjs/common';
import { CreateProduitsAcheteDto } from './dto/create-produits_achete.dto';
import { UpdateProduitsAcheteDto } from './dto/update-produits_achete.dto';

@Injectable()
export class ProduitsAchetesService {
  create(createProduitsAcheteDto: CreateProduitsAcheteDto) {
    return 'This action adds a new produitsAchete';
  }

  findAll() {
    return `This action returns all produitsAchetes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} produitsAchete`;
  }

  update(id: number, updateProduitsAcheteDto: UpdateProduitsAcheteDto) {
    return `This action updates a #${id} produitsAchete`;
  }

  remove(id: number) {
    return `This action removes a #${id} produitsAchete`;
  }
}
