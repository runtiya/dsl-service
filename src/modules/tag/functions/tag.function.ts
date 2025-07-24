import { CreateTagDto } from "../dto/create-tag.dto";
import { UpdateTagDto } from "../dto/update-tag.dto";
import { TagType } from "../tag.type";

export function convertTagDtoToType(tagDto: CreateTagDto | UpdateTagDto): TagType {
    return <TagType>{
        tagUid: tagDto.tagUid,
        tagName: tagDto.tagName,
        profileId: tagDto.profileId,
    }
}