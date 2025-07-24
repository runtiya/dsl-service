import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { TagService } from './tag.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import * as tagFunction from './functions/tag.function';
import { TagType } from './tag.type';

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Post()
  async create(@Body() createTagDto: CreateTagDto) {
    const tagType: TagType = tagFunction.convertTagDtoToType(createTagDto);
    return this.tagService.create(createTagDto);
  }

  @Get()
  async findAll() {
    return await this.tagService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.tagService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateTagDto: UpdateTagDto) {
    const tagType: TagType = tagFunction.convertTagDtoToType(updateTagDto);
    return await this.tagService.update(id, tagType);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.tagService.remove(id);
  }
}
