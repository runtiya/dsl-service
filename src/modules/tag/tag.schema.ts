import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({timestamps: true})
export class Tag extends Document {
    @Prop({
        unique: true,
        required: true,
        type: String
    })
    tagUid: string;

    @Prop({
        required: true,
        type: String
    })
    tagName: string;

    @Prop({
        unique: true,
        ref: 'Profile',
    })
    profileId: string;
}

export const TagSchema = SchemaFactory.createForClass(Tag);