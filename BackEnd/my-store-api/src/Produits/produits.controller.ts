import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProduitsService } from './produits.service';
import { CreateProduitDto } from './dto/create-produit.dto';
import { UpdateProduitDto } from './dto/update-produit.dto';

@Controller('produits')
export class ProduitsController {
  constructor(private readonly produitsService: ProduitsService) {}

  @Post()
  create(@Body() createProduitDto: CreateProduitDto) {
    console.log(createProduitDto);
    try {
      return this.produitsService.create(createProduitDto);
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  @Get()
  findAll(@Body('id_user') id: string) {
    return this.produitsService.findAll(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.produitsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() createProduitDto: CreateProduitDto) {
    return this.produitsService.update(+id, createProduitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.produitsService.remove(+id);
  }
}
