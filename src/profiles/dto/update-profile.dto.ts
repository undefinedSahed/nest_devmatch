import { IsOptional, IsString, Length } from 'class-validator';

export class UpdateProfileDto {
  @IsOptional()
  @IsString()
  @Length(5, 100)
  name: string;

  @IsOptional()
  @IsString()
  description: string;
}
