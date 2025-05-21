import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Active CORS pour autoriser les requêtes venant de ton frontend React
  app.enableCors({
    origin: 'http://localhost:3000', // adapte si ton frontend tourne sur un autre port ou URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
