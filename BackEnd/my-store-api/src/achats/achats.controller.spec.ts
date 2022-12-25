import { Test, TestingModule } from '@nestjs/testing';
import { AchatsController } from './achats.controller';
import { AchatsService } from './achats.service';

describe('AchatsController', () => {
  let controller: AchatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AchatsController],
      providers: [AchatsService],
    }).compile();

    controller = module.get<AchatsController>(AchatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
