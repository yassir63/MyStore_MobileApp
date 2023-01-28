import { IsNotEmpty, IsNumber ,IsDateString, IsBoolean, IsString } from "class-validator";

export class CreateAchatDto {

    @IsString()
    @IsNotEmpty()
    id_user :string;

    @IsNumber()
    @IsNotEmpty()
    montant : number ;

    @IsDateString() 
    date_achat:Date;

    @IsBoolean()
    paiement : boolean;
}
