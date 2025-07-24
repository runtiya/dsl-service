import { Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { Tag } from './tag.schema';
import { InjectModel } from '@nestjs/mongoose/dist/common/mongoose.decorators';
import { Model } from 'mongoose';
import { TagType } from './tag.type';

@Injectable()
export class TagService {
  constructor(
    @InjectModel(Tag.name)
    private readonly tagModel: Model<Tag>
  ) {}


  async create(tagType: TagType) : Promise<Tag> {
    return await this.tagModel.create(tagType);
  }

  async findAll(): Promise<Tag[]> {
    return await this.tagModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} tag`;
  }

  update(id: number, updateTagDto: UpdateTagDto) {
    return `This action updates a #${id} tag`;
  }

  remove(id: number) {
    return `This action removes a #${id} tag`;
  }
}
