import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateProduitsAcheteDto {

    @IsNumber()
    @IsNotEmpty()
    id_produit: number;


    
    @IsNumber()
    @IsNotEmpty()
    id_achat: number;



}
