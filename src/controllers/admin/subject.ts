import { messages } from "@Custom_message";
import subjectModel from "@models/admin";
import { StatusCodes } from "http-status-codes";
import argon2 from "argon2";
import { generateToken } from "@utils/authenticate";
import cookieParser from 'cookie-parser';

const add_subto_class = async (body: any, fastify: any) => {
    try {
        const { classId, subjectNames } = body;
        const add = await subjectModel.create(body);
        return add;
    } catch (err) {
        throw ({ code: StatusCodes.BAD_REQUEST, err: err });
    }
}

const edit = async (body: any, fastify: any) => {
    try {
        const { subjectId, subjectNames } = body;
        const add: any = await subjectModel.findOneAndUpdate({ _id: subjectId }, { subjectNames: subjectNames }, { new: true });
        return add;
    } catch (err) {
        throw (err);
    }
}
const details = async (subjectId: any) => {
    try {
        const details: any = await subjectModel.findOne({ _id: subjectId });
        return details;
    } catch (err) {
        throw err;
    }
}

const detailswith_multipleclassIds = async (body: any) => {
    try {
        const details: any = await subjectModel.find({ classId: body.classId });
        return details;
    } catch (err) {
        throw err;
    }
}

export default {
    add_subto_class,
    edit,
    details,
    detailswith_multipleclassIds
} as const;