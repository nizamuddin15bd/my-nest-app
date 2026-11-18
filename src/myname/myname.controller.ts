import { Body, Controller, Post } from '@nestjs/common';
import { UppercasePipe } from '../common/pipes/uppercase/uppercase.pipe.js';

@Controller('myname')
export class MynameController {
    @Post("custom")
    transforName(@Body("name", new UppercasePipe()) name: string) {
        // Implementation here
        return { message: ` Received name : ${name}` };
    }
}
