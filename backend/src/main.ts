/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port  = process.env.PORT || 5000 as number

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port, () => console.log(`Rental server is running on http://localhost:${port}`));
}
bootstrap();
