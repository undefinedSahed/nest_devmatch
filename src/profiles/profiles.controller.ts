import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';

@Controller('profiles')
export class ProfilesController {
  // Get /profiles
  @Get()
  findAll(@Query('age') age: number) {
    return [{ age }];
  }

  // Get /profiles/id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return [{ id }];
  }

  // Post /profiles
  @Post()
  createProfile(@Body() createProfileDto: CreateProfileDto) {
    return {
      name: createProfileDto.name,
      description: createProfileDto.description,
    };
  }
}
