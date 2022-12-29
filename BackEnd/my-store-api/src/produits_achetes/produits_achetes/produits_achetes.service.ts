import { Injectable } from '@nestjs/common';
import { CreateProduitsAcheteDto } from './dto/create-produits_achete.dto';
import { UpdateProduitsAcheteDto } from './dto/update-produits_achete.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ProduitsAchetesService {

  constructor(private readonly prismaService: PrismaService){}

  create(createProduitsAcheteDto: CreateProduitsAcheteDto) {
   
    return this.prismaService.ProduitAchete.create({
      data: createProduitsAcheteDto,
      });
  }
  

  findAll(id: number) {
    return this.prismaService.ProduitAchete.findMany(
      {
        where: { id_achat: id },
      }
    );
  }

  findOne(idA: number,idP: number) {
    return this.prismaService.ProduitAchete.findUnique({
      where: { id_achat: idA , id_produit: idP },
    });
  }

  update(idA: number,idP: number, updateProduitsAcheteDto: UpdateProduitsAcheteDto) {
    return this.prismaService.ProduitAchete.update({
      where: {
        id_achat: idA , id_produit: idP
      },
      data: updateProduitsAcheteDto,
    });
  }

  remove(idA: number,idP: number) {
    return this.prismaService.ProduitAchete.delete({
      where: {
        id_achat: idA , id_produit: idP
      },
    });  
  }
}
