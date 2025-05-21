import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module'; // ✅ à importer
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UsersModule, // ✅ rendre disponible UsersService
    JwtModule.register({
      secret: 'votre_clé_secrète', // 🔐 à mettre dans .env si possible
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
