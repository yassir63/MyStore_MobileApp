import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from '@nestjs/jwt/dist';
import { jwtSecret } from 'src/utils/constants';

@Injectable()
export class getUser implements NestMiddleware {
   jwt = new JwtService({ secret: jwtSecret });

  async use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...');
    console.log(req.body);
    console.log(req.cookies)

    const decoded = await this.jwt.verify(req.cookies['token']);
    console.log(decoded)
    req.body['id_user'] = decoded['id'];

    console.log(req.body);
    next(); 
  }
}
