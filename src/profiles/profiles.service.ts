import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfilesService {
  private profiles = [
    {
      id: randomUUID(),
      name: 'Sahed Rahman',
      description: 'Hello, this is Sahed',
    },
    {
      id: randomUUID(),
      name: 'Rana',
      description: 'Hello! This is Rana',
    },
    {
      id: randomUUID(),
      name: 'Jaki',
      description: 'Hello! This is Jaki',
    },
  ];

  // Get All Profiles
  findAll() {
    return this.profiles;
  }

  // Get a single profile
  findOne(id: string) {
    const matchingProfile = this.profiles.find((profile) => profile.id === id);

    if (!matchingProfile) {
      throw new NotFoundException(`Profile with ${id} not found`);
    }

    return matchingProfile;
  }

  // Create a profile
  createProfile(createProfileDto: CreateProfileDto) {
    const createdProfile = {
      id: randomUUID(),
      ...createProfileDto,
    };

    this.profiles.push(createdProfile);
    return createdProfile;
  }

  // Update a profile
  updateProfile(id: string, updateProfileDto: UpdateProfileDto) {
    const profileToEdit = this.profiles.find((profile) => profile.id === id);

    if (!profileToEdit) {
      throw new NotFoundException(`Profile with id ${id} not found`);
    }

    if (updateProfileDto.name !== undefined) {
      profileToEdit.name = updateProfileDto.name;
    }

    if (updateProfileDto.description !== undefined) {
      profileToEdit.description = updateProfileDto.description;
    }

    return profileToEdit;
  }

  // Delete a profile
  deleteProfile(id: string) {
    const deletingIndex = this.profiles.findIndex(
      (profile) => profile.id === id,
    );

    if (deletingIndex === -1) {
      throw new NotFoundException(`Profile with id ${id} not found`);
    }

    return this.profiles.splice(deletingIndex, 1);
  }
}
