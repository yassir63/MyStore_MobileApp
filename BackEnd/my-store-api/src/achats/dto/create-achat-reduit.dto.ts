import { IsNotEmpty, IsNumber ,IsDateString, IsBoolean, IsString, IsArray, IsOptional } from "class-validator";

export class CreateAchatReduitDto {

    @IsString()
    @IsNotEmpty()
    id_user :string;

    @IsNumber()
    @IsNotEmpty()
    montant : number ;

    @IsDateString() 
    date_achat:Date;

    @IsBoolean()
    paiemenet : boolean;

    @IsArray()
    products: string[];

    @IsOptional()
    @IsString()
    crediteur:string;

}
