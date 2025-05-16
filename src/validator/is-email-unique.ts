import {Injectable} from '@nestjs/common';
import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from '@nestjs/class-validator';
import { PrismaService } from 'src/prisma/prisma.service';


@ValidatorConstraint({async: true})
@Injectable()
export class IsEmailUniqueConstraint implements ValidatorConstraintInterface{
    constructor(private readonly prismaService: PrismaService){} 
    async validate(email: string){
        if(!this.prismaService){
            return false;
        }
        const autor = await this.prismaService.autor.findFirst({where: {email}});
        return !autor;
    }
    defaultMessage(){
        return "Email de autor ja criado";
    }
}

export function isEmailUnico(validationOptions?: ValidationOptions){
    return function (object: Object, propertyName: string){
        registerDecorator({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsEmailUniqueConstraint,
        })
    }
}