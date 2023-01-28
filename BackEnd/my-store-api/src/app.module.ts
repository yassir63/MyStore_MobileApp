import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from '../prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AchatsModule } from './achats/achats.module';
import { ProduitsModule } from './produits/produits.module';
import { ChargesModule } from './charges/charges.module';
import { CreditModule } from './credit/credit.module';
import { ProduitsAchetesModule } from './produits_achetes/produits_achetes.module';

import { getUser } from './middlewears/getUser.middleware';
import { MiddlewareConsumer } from '@nestjs/common';
import { RequestMethod } from '@nestjs/common';

import { ProduitsController } from './produits/produits.controller';
import { AchatsController } from './achats/achats.controller';
import { ChargesController } from './charges/charges.controller';
@Module({
  imports: [AuthModule, PrismaModule, UsersModule, AchatsModule, ProduitsModule, ChargesModule, CreditModule, ProduitsAchetesModule],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(getUser)
      .forRoutes(ProduitsController, AchatsController,ChargesController);
  }
}
