import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateChargeDto } from './dto/create-charge.dto';
import { UpdateChargeDto } from './dto/update-charge.dto';
import { PrismaService } from 'prisma/prisma.service';
import { fix_date } from 'src/shared_funcs/fix_date';
@Injectable()
export class ChargesService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createChargeDto: CreateChargeDto) {
    createChargeDto.date = fix_date(createChargeDto.date);
    try {
      return await this.prismaService.charges.create({
        data: createChargeDto,
      });
    } catch (error) {
      return new HttpException(
        'couldnt create this charge',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findAll(id: string) {
    return await this.prismaService.charges.findMany({
      where: {
        id_user: id['id_user'],
      },
    });
  }

  findOne(id: number) {
    return this.prismaService.charges.findUnique({ 
      where: { 
        id_charge: id
      }});
  }

  update(id: number, createChargeDto: CreateChargeDto) {
    return this.prismaService.charges.update(
      {
        data:createChargeDto,
        where:{
          id_charge:id
        }
        
      }
    );
  }

  remove(id: number) {
    return this.prismaService.charges.delete({
      where:{
        id_charge:id
      }
    });
  }
}
