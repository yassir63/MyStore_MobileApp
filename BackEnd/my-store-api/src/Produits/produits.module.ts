import { Module } from '@nestjs/common';
import { ProduitsService } from './Produits.service';
import { ProduitsController } from './produits.controller';

@Module({
  controllers: [ProduitsController],
  providers: [ProduitsService]
})
export class ProduitsModule {}
