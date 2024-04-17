/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const microservicesOptions: MicroserviceOptions = {
  transport: Transport.RMQ,
  options: {
    urls:['amqp://localhost:5672'],
    queue:'account_service_queue'
  }
}

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    microservicesOptions
  );
    app.listen();
}
bootstrap();

//async function bootstrap() {
  //const app = await NestFactory.create(AppModule);
  //await app.listen(3000);
//}
//bootstrap();
