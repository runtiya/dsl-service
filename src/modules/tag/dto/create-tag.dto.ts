import { IsNotEmpty, IsOptional } from "class-validator";
import { Types } from "mongoose";

export class CreateTagDto {
    @IsNotEmpty({message: "Tag UID cannot be empty!"})
    tagUid: string;

    @IsNotEmpty({message: "Tag Name cannot be empty!"})
    tagName: string;

    @IsOptional()
    profileId: Types.ObjectId;

}
