import {
  IsNumber,
  IsNotEmpty,
  IsDateString,
  IsBoolean,
  IsString,
} from 'class-validator';

export class CreateProduitDto {

    
  @IsString()
  @IsNotEmpty()
  nom: string;

  @IsString()
  @IsNotEmpty()
  marque: string;

  @IsString()
  @IsNotEmpty()
  categorie: string;

  @IsNumber()
  @IsNotEmpty()
  Prix_vente: number;

  @IsNumber()
  @IsNotEmpty()
  Prix_achat: number;

  @IsDateString()
  @IsNotEmpty()
  date_expiration: Date;

  @IsNumber()
  @IsNotEmpty()
  quantite: number;

  @IsBoolean()
  @IsNotEmpty()
  libelle: boolean;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  id_user: string;

}
