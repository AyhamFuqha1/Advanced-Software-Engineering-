import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthMiddleware } from './middleware/auth.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // تفعيل CORS للـ frontend
  app.enableCors({
    origin: 'http://localhost:5173',
    credentials: true,
  });

  // تفعيل الـ middleware إذا أردت
  // app.use(AuthMiddleware);

  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();
