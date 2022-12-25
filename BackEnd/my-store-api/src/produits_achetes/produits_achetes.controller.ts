import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProduitsAchetesService } from './produits_achetes.service';
import { CreateProduitsAcheteDto } from './dto/create-produits_achete.dto';
import { UpdateProduitsAcheteDto } from './dto/update-produits_achete.dto';

@Controller('produits-achetes')
export class ProduitsAchetesController {
  constructor(private readonly produitsAchetesService: ProduitsAchetesService) {}

  @Post()
  create(@Body() createProduitsAcheteDto: CreateProduitsAcheteDto) {
    return this.produitsAchetesService.create(createProduitsAcheteDto);
  }

  @Get()
  findAll() {
    return this.produitsAchetesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.produitsAchetesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProduitsAcheteDto: UpdateProduitsAcheteDto) {
    return this.produitsAchetesService.update(+id, updateProduitsAcheteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.produitsAchetesService.remove(+id);
  }
}
