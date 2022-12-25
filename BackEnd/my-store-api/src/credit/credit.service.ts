import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCreditDto } from './dto/create-credit.dto';
import { UpdateCreditDto } from './dto/update-credit.dto';
import { fix_date } from 'src/shared_funcs/fix_date';
import { PrismaService } from 'prisma/prisma.service';


@Injectable()
export class CreditService {

  constructor(private readonly prismaService: PrismaService){}
  
  async create(createCreditDto: CreateCreditDto) {
    createCreditDto.Date_limite = fix_date(
      createCreditDto.Date_limite,
    );
    try {
      return await this.prismaService.achat_credit.create({
      data: createCreditDto,
      });
    } catch (e) {
      console.log("error") ;
      return new HttpException(
        'couldnt create this Credit',
        HttpStatus.BAD_REQUEST, 
      );
    }
  }

  findAll() {
    return this.prismaService.achat_credit.findMany();
  }

  findOne(id: number) {
    return this.prismaService.achat_credit.findUnique({
      where: { id_achat: id },
    });
  }

  update(id: number, createCreditDto: CreateCreditDto) {
    createCreditDto.Date_limite = fix_date(
      createCreditDto.Date_limite,
    );

    return this.prismaService.achat_credit.update({
      where: {
        id_achat: id,
      },
      data: createCreditDto,
    });
  }

  remove(id: number) {
    return this.prismaService.achat_credit.delete({
      where: {
        id_achat: id,
      },
    });  
  }
}
