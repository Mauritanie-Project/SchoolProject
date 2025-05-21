import { Module } from '@nestjs/common';
import { BulletinsService } from './bulletins.service';
import { BulletinsController } from './bulletins.controller';

@Module({
  providers: [BulletinsService],
  controllers: [BulletinsController]
})
export class BulletinsModule {}
