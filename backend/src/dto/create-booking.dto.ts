import { IsDateString, IsEmail, IsString, IsUUID, MaxLength } from 'class-validator';

export class CreateBookingDto {
  @IsUUID()
  serviceId!: string;

  @IsString()
  @MaxLength(120)
  customerName!: string;

  @IsEmail()
  customerEmail!: string;

  @IsString()
  @MaxLength(60)
  customerPhone!: string;

  @IsDateString()
  preferredDate!: string;
}
