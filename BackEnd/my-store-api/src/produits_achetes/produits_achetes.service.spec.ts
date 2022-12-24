import { Test, TestingModule } from '@nestjs/testing';
import { ProduitsAchetesService } from './produits_achetes.service';

describe('ProduitsAchetesService', () => {
  let service: ProduitsAchetesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProduitsAchetesService],
    }).compile();

    service = module.get<ProduitsAchetesService>(ProduitsAchetesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
