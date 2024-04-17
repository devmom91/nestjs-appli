/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { IdentityService } from './identity.service';
import { MessagePattern } from '@nestjs/microservices';



@Controller('identity')
export class IdentityController {
    IdentityService: any;

    constructor(private identityService: IdentityService){}

 @MessagePattern('helloFromApi')
hello(req){
    console.log(req);
    return this.identityService.hello(req);

}

}
