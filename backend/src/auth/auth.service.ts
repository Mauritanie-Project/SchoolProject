import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { users } from '../users/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<users | null> {
  const user = await this.usersService.findOneByEmail(email);
  console.log('Utilisateur trouvé:', user);
  if (user) {
    console.log('Password envoyé:', pass);
    console.log('Password en base:', user.password);
  }
  if (user && user.password === pass) {
    return user;
  }
  return null;
}


  async login(user: users) {
    const payload = { email: user.email, sub: user.id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
      role: user.role,
    };
  }
}