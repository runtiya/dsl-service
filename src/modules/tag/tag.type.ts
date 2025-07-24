import { Types } from "mongoose";

export type TagType = {
    tagUid: string;
    tagName: string;
    profileId: Types.ObjectId;
}