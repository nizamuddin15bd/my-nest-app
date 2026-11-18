import { IsString, IsInt } from 'class-validator';

export class CreateCustomerDto {
    @IsString()
    name: string;

    // email: string;
    // phone: string;

    @IsInt()
    age: number;
}
