import {
    IsNumber,
    IsNotEmpty,
    IsDateString,
    IsString,
  } from 'class-validator';
  

    // check this

  export class CreateCreditDto {
  
  
    @IsDateString()
    @IsNotEmpty()
    Date_limite: Date;

    @IsString()
    @IsNotEmpty()
    nom_crediteur: string;
  
    @IsNumber()
    @IsNotEmpty()
    id_achat: number;
  
  }
  