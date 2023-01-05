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

  @Get(':id')
  findAll(@Param('id') id: number) {
    return this.produitsAchetesService.findAll(+id);
  }

  @Get('/:idA/:idP')
  findOne(@Param('idA') idA: number , @Param('idP') idP: number) {
    return this.produitsAchetesService.findOne( +idA , +idP );
  }

  @Patch('/:idA/:idP')
  update(@Param('idA') idA: number , @Param('idP') idP: number, @Body() createProduitsAcheteDto: CreateProduitsAcheteDto) {
    return this.produitsAchetesService.update(+idA , +idP, createProduitsAcheteDto);
  }

  @Delete('/:idA/:idP')
  remove(@Param('idA') idA: number, @Param('idP') idP: number) {
    return this.produitsAchetesService.remove(+idA , +idP );
  }
}
