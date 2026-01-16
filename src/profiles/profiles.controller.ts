import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  HttpCode,
  HttpStatus,
  Delete,
  ValidationPipe,
} from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfilesService } from './profiles.service';

@Controller('profiles')
export class ProfilesController {
  constructor(private profileService: ProfilesService) {}

  // Get /profiles
  @Get()
  findAll() {
    return this.profileService.findAll();
  }

  // Get /profiles/id
  @Get(':id')
  @HttpCode(HttpStatus.CREATED)
  findOne(
    @Param('id')
    id: string,
  ) {
    return this.profileService.findOne(id);
  }

  // Post /profiles
  @Post()
  createProfile(@Body() createProfileDto: CreateProfileDto) {
    return this.profileService.createProfile(createProfileDto);
  }

  // Update /profile/:id
  @Put(':id')
  updateProfile(
    @Param('id') id: string,
    @Body(new ValidationPipe()) updateProfileDto: UpdateProfileDto,
  ) {
    return this.profileService.updateProfile(id, updateProfileDto);
  }

  // Delete /profile/:id
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.profileService.deleteProfile(id);
  }
}
