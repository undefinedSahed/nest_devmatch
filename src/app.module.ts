import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfilesModule } from './profiles/profiles.module';
import { PorfilesController } from './porfiles/porfiles.controller';

@Module({
  imports: [ProfilesModule],
  controllers: [AppController, PorfilesController],
  providers: [AppService],
})
export class AppModule {}
