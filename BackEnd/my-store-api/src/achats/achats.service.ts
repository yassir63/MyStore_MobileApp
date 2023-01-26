import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAchatDto } from './dto/create-achat.dto';
import { CreateAchatReduitDto } from './dto/create-achat-reduit.dto';
import { PrismaService } from 'prisma/prisma.service';
import { fix_date } from 'src/shared_funcs/fix_date';

@Injectable()
export class AchatsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createAchatReduitDto: CreateAchatReduitDto) {
    console.log('Service');
    var crediteur: string;
    console.log(crediteur);

    createAchatReduitDto.date_achat = fix_date(createAchatReduitDto.date_achat);
    const products = createAchatReduitDto['products'];
    if ('crediteur' in createAchatReduitDto) {
      crediteur = createAchatReduitDto['crediteur'];
      delete createAchatReduitDto['crediteur'];
      console.log(crediteur);
    }

    delete createAchatReduitDto['products'];

    this;
    console.log(createAchatReduitDto);
    try {
      const returnedata = await this.prismaService.achat.create({
        data: createAchatReduitDto,
      });
      console.log(returnedata);

      // insert values into slave tables(credit - produits achtees)
      if (returnedata && returnedata.id_achat) {
        //produits achetes
        products.forEach(async (item, index) => {
          if (typeof item == 'number') {
            const datos = {
              id_achat: returnedata.id_achat,
              id_produit: item,
            };
            console.log(datos);
            const pa = await this.prismaService.produits_achetes.create({
              data: datos,
            });
            console.log('pa >>>', pa);
          }
        });
        //credit
        if (crediteur != undefined) {
          const ac = await this.prismaService.achat_credit.create({
            data: {
              id_achat: returnedata.id_achat,
              nom_crediteur: crediteur,
              Date_limite: returnedata.date_achat,
            },
          });
          console.log('ca >>>', ac);
        }
      }

      return returnedata;
    } catch (e) {
      console.log('error : ', e);

      return new HttpException(
        'couldnt create this product',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  findAll() {
    return this.prismaService.achat.findMany();
  }

  findOne(id: number) {
    return this.prismaService.achat.findUnique({
      where: { id_achat: id },
    });
  }

  //its the same create DTO we dont need the updates one
  // we also need to fix the date problem
  update(id: number, updateAchatDto: CreateAchatDto) {
    updateAchatDto.date_achat = fix_date(updateAchatDto.date_achat);
    return this.prismaService.achat.update({
      where: { id_achat: id },
      data: updateAchatDto,
    });
  }

  remove(id: number) {
    return this.prismaService.achat.delete({
      where: {
        id_achat: id,
      },
    });
  }
}
