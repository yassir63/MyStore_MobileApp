import { Module } from '@nestjs/common';
import { ProduitsAchetesService } from './produits_achetes.service';
import { ProduitsAchetesController } from './produits_achetes.controller';

@Module({
  controllers: [ProduitsAchetesController],
  providers: [ProduitsAchetesService]
})
export class ProduitsAchetesModule {}
