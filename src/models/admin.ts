import { model, Schema } from "mongoose";

interface subject {
    classId: any;
    subjectNames: [];
    isDelete: boolean;
    isActive: boolean;
}

const schema = new Schema<subject>({
    classId: { type: String, required: true },
    subjectNames: [],
    isActive: { type: Boolean, default: true },
    isDelete: { type: Boolean, default: false }
},
    {
        timestamps: true
    });
const subjectModel = model<subject>('subject', schema);
export = subjectModel;