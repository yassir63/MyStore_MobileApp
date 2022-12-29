import { PartialType } from '@nestjs/mapped-types';
import { CreateProduitsAcheteDto } from './create-produits_achete.dto';

export class UpdateProduitsAcheteDto extends PartialType(CreateProduitsAcheteDto) {}
