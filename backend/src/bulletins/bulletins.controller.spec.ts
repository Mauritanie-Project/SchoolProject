import { Test, TestingModule } from '@nestjs/testing';
import { BulletinsController } from './bulletins.controller';

describe('BulletinsController', () => {
  let controller: BulletinsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BulletinsController],
    }).compile();

    controller = module.get<BulletinsController>(BulletinsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
