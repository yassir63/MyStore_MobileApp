import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AchatsService } from './achats.service';
import { CreateAchatDto } from './dto/create-achat.dto';

@Controller('achats')
export class AchatsController {
  constructor(private readonly achatsService: AchatsService) {}

  @Post()
  create(@Body() createAchatDto: CreateAchatDto) {
    
    return this.achatsService.create(createAchatDto);
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
