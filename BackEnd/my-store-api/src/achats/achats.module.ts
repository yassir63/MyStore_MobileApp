import { Module ,RequestMethod ,MiddlewareConsumer} from '@nestjs/common';
import { AchatsService } from './achats.service';
import { AchatsController } from './achats.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtSecret } from 'src/utils/constants';



@Module({
  controllers: [AchatsController],
  providers: [AchatsService],
  imports: [JwtModule.register({ secret: jwtSecret })]
})
export class AchatsModule {

}
