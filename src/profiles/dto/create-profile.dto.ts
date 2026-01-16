import { IsString, Length } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  @Length(5, 100)
  name: string;

  @IsString()
  description: string;
}
