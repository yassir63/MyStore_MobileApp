import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProduitDto } from './dto/create-produit.dto';
import { UpdateProduitDto } from './dto/update-produit.dto';
import { fix_date } from 'src/shared_funcs/fix_date';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ProduitsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createProduitDto: CreateProduitDto) {
    createProduitDto.date_expiration = fix_date(
      createProduitDto.date_expiration,
    );
    try {
      return await this.prismaService.produit.create({
        data: createProduitDto,
      });
    } catch (e) {
      console.log("error") ;
      return new HttpException(
        'couldnt create this product',
        HttpStatus.BAD_REQUEST, 
      );
    }
  }

  findAll() {
    return this.prismaService.produit.findMany();
  }

  findOne(id: number) {
    return this.prismaService.produit.findUnique({
      where: { id_produit: id },
    });
  }

  update(id: number, createProduitDto: CreateProduitDto) {
    createProduitDto.date_expiration = fix_date(
      createProduitDto.date_expiration,
    );

    return this.prismaService.produit.update({
      where: {
        id_produit: id,
      },
      data: createProduitDto,
    });
  }

  remove(id: number) {
    return this.prismaService.produit.delete({
      where: {
        id_produit: id,
      },
    });
  }
}
