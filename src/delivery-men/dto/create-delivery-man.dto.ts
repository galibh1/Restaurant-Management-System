import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class CreateDeliveryManDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
