import { Test, TestingModule } from '@nestjs/testing';
import { ProduitsAchetesController } from './produits_achetes.controller';
import { ProduitsAchetesService } from './produits_achetes.service';

describe('ProduitsAchetesController', () => {
  let controller: ProduitsAchetesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProduitsAchetesController],
      providers: [ProduitsAchetesService],
    }).compile();

    controller = module.get<ProduitsAchetesController>(ProduitsAchetesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
