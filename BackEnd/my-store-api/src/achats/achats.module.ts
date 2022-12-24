import { Module } from '@nestjs/common';
import { AchatsService } from './achats.service';
import { AchatsController } from './achats.controller';

@Module({
  controllers: [AchatsController],
  providers: [AchatsService]
})
export class AchatsModule {}
