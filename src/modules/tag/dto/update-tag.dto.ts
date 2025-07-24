import { PartialType } from '@nestjs/swagger';
import { CreateTagDto } from './create-tag.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateTagDto extends PartialType(CreateTagDto) {
    @IsNotEmpty({message: "Tag ID cannot be empty!"})
    _id: string;
}
