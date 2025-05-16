import {Injectable} from '@nestjs/common';
import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { PrismaService } from 'src/prisma/prisma.service';


@ValidatorConstraint({async: true})
@Injectable()
export class IsEmailUniqueConstraint implements ValidatorConstraintInterface{
    constructor(private readonly prismaService: PrismaService){} 
    async validate(email: string){
        if(!this.prismaService){
            return false;
        }
        const usuario = await this.prismaService.usuario.findFirst({where: {email}});
        return !usuario;
    }
    defaultMessage(){
        return "Email de usuario ja criado";
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