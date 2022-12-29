import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateProduitsAcheteDto {

    @IsNumber()
    @IsNotEmpty()
    id_achat: number;

    @IsNumber()
    @IsNotEmpty()
    id_produit: number;

}
