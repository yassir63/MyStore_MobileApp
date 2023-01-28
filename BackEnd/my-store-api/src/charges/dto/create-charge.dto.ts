import { IsDateString, IsNumber, IsString } from "class-validator"

export class CreateChargeDto {
  
  @IsString()
  creditor :string   

  @IsNumber()
  montant  :number
  
  @IsDateString()
  date    :  Date

  @IsDateString()
  date_limite    :  Date

  @IsString()
  id_user :string
}
