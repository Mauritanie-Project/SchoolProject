import { Test, TestingModule } from '@nestjs/testing';
import { BulletinsService } from './bulletins.service';

describe('BulletinsService', () => {
  let service: BulletinsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BulletinsService],
    }).compile();

    service = module.get<BulletinsService>(BulletinsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
