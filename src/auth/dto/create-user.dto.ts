import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  // Validation
  @IsString()
  @MinLength(1)
  // Swagger
  @ApiProperty({ example: 'John', description: 'Nombre(s) del usuario' })
  firstName: string;

  // Validation
  @IsString()
  @MinLength(1)
  // Swagger
  @ApiProperty({ example: 'Doe', description: 'Apellido(s) del usuario' })
  lastName: string;

  // Validation
  @IsString()
  @IsEmail()
  // Swagger
  @ApiProperty({
    example: 'john@doe.com',
    description: 'Correo electrónico del usuario',
  })
  email: string;

  // Validation
  @IsString()
  @MinLength(8)
  @MaxLength(40)
  // Swagger
  @ApiProperty({
    example: 'superSecretPassword123',
    description: 'Contraseña del usuario',
  })
  password: string;
}
