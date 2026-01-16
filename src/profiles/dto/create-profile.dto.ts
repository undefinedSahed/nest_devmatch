import { IsString, Length, MinLength } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  @Length(5, 100)
  name: string;

  @IsString()
  @MinLength(10)
  description: string;
}
