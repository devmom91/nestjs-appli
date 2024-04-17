"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const microservices_1 = require("@nestjs/microservices");
const microservicesOptions = {
    transport: microservices_1.Transport.RMQ,
    options: {
        urls: ['amqp://localhost:5672'],
        queue: 'account_service_queue'
    }
};
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, microservicesOptions);
    app.listen();
}
bootstrap();
//# sourceMappingURL=main.js.map