import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { users } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(users)
    private userssRepository: Repository<users>,
  ) {}

  findAll(): Promise<users[]> {
    return this.userssRepository.find();
  }

  findOne(id: number): Promise<users | null> {
    return this.userssRepository.findOneBy({ id });
  }

  async findOneByEmail(email: string): Promise<users | null> {
    const users = await this.userssRepository.findOne({ where: { email } });
    return users ?? null;
  }


  create(usersData: Omit<users, 'id'>): Promise<users> {
    const newusers = this.userssRepository.create(usersData);
    return this.userssRepository.save(newusers);
  }

  async update(id: number, updateData: Partial<users>): Promise<users | null> {
    const users = await this.userssRepository.findOneBy({ id });
    if (!users) return null;
    Object.assign(users, updateData);
    return this.userssRepository.save(users);
  }

  async remove(id: number): Promise<{ deleted: boolean }> {
    await this.userssRepository.delete(id);
    return { deleted: true };
  }
}
