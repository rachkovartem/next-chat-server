import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
const cors = require('cors')

const corsOptions = {
  origin: ['https://nextchat-app.herokuapp.com', 'http://localhost:3000', '193.176.84.208'],
  credentials: true,
  optionSuccessStatus: 200,
  // origin: true,
  // methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  // preflightContinue: false,
  // optionsSuccessStatus: 204,
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(corsOptions);
  app.use(cookieParser());
  await app.listen(process.env.PORT || 8080, () => console.log(process.env.PORT || 8080));
}
bootstrap();
