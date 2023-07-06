import {
  IsEmail,
  IsInt,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(3)
  names: string;

  @IsString()
  @MinLength(3)
  lastNames: string;

  @IsInt()
  dniNumber: number;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(5)
  cellphone: string;

  @IsString()
  @MinLength(5)
  address: string;

  @IsString()
  @IsOptional()
  note?: string;
}
