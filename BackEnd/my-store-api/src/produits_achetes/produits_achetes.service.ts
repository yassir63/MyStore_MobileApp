import { Injectable } from '@nestjs/common';
import { CreateProduitsAcheteDto } from './dto/create-produits_achete.dto';
import { UpdateProduitsAcheteDto } from './dto/update-produits_achete.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ProduitsAchetesService {

  constructor(private readonly prismaService: PrismaService){}

  create(createProduitsAcheteDto: CreateProduitsAcheteDto) {
   
    return this.prismaService.produits_achetes.create({
      data: createProduitsAcheteDto,
      });
  }
  

  findAll(id: number) {
    return this.prismaService.produits_achetes.findMany(
      {
        where: { id_achat: id },
      }
    );
  }

    //ATTENTION !!


  findOne(idA: number,idP: number) {
    return this.prismaService.produits_achetes.findMany({
      where: { id_achat: idA , id_produit: idP },
    });
  }


    //ATTENTION !!


  update(idA: number,idP: number, createProduitsAcheteDto: CreateProduitsAcheteDto) {
    return this.prismaService.produits_achetes.updateMany({
      where: {
        id_achat: idA , id_produit: idP
      },
      data: createProduitsAcheteDto,
    });
  }

  //ATTENTION !!

  remove(idA: number,idP: number) {
    return this.prismaService.produits_achetes.deleteMany({
      where: {
        id_achat: idA , id_produit: idP
      },
    });  
  }
}
