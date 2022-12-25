import { IsDateString, IsNumber, IsString } from "class-validator"

export class CreateChargeDto {
  
  @IsString()
  categorie :string   

  @IsNumber()
  montant  :number
  
  @IsDateString()
  date    :  Date

  @IsString()
  id_user :string
}
