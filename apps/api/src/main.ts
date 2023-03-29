/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { AppModule } from './app/app.module';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import session from "express-session";
import * as passport from "passport"
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.enableCors()
  app.use(
    session({
      secret: 'keyboard',
      resave: false,
      saveUninitialized: false
    })
  )

  const config = new DocumentBuilder()
  .setTitle('Discussion Board')
  .setDescription('The Discussion Board description')
  .setVersion('1.0')
  .addTag('discussion-board')
  .build();

  const port = process.env.PORT || 3333;
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();

// const app = await NestFactory.create(AppModule);

// const config = new DocumentBuilder()
//   .setTitle('Cats example')
//   .setDescription('The cats API description')
//   .setVersion('1.0')
//   .addTag('cats')
//   .build();
// const document = SwaggerModule.createDocument(app, config);
// SwaggerModule.setup('api', app, document);

// await app.listen(3000);
