import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AchatsService } from './achats.service';
import { CreateAchatReduitDto } from './dto/create-achat-reduit.dto';
import { CreateAchatDto } from './dto/create-achat.dto';

@Controller('achats')
export class AchatsController {
  constructor(private readonly achatsService: AchatsService) {}

  @Post()
  create(@Body() CreateAchatReduitDto: CreateAchatReduitDto) {
    console.log('passed middleware')
    console.log(CreateAchatReduitDto)
    return this.achatsService.create(CreateAchatReduitDto);
  }

  @Get()
  findAll() {
    return this.achatsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id);
    return this.achatsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAchatDto: CreateAchatDto) {
    return this.achatsService.update(+id, updateAchatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.achatsService.remove(+id);
  }
}
