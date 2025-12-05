import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthMiddleware } from './middleware/auth.middleware';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 // app.use(AuthMiddleware)
  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();
