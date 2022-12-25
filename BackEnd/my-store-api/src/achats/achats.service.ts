import { Injectable } from '@nestjs/common';
import { CreateAchatDto } from './dto/create-achat.dto';
import { PrismaService } from 'prisma/prisma.service';
import { fix_date } from 'src/shared_funcs/fix_date';



@Injectable()
export class AchatsService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createAchatDto: CreateAchatDto) {
    createAchatDto.date_achat=fix_date(createAchatDto.date_achat);
    return this.prismaService.achat.create({
      data: createAchatDto,
    });
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
