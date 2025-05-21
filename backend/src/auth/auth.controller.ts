import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const { email, password } = body;

    // Valide l'utilisateur avec email + password
    const user = await this.authService.validateUser(email, password);

    if (!user) {
      throw new UnauthorizedException('Identifiants incorrects');
    }

    // Retourne le token JWT et les infos utiles
    return this.authService.login(user);
  }
}
