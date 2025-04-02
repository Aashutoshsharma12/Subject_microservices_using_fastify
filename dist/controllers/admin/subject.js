"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const admin_1 = __importDefault(require("../../models/admin"));
const http_status_codes_1 = require("http-status-codes");
const add_subto_class = async (body, fastify) => {
    try {
        const { classId, subjectNames } = body;
        const add = await admin_1.default.create(body);
        return add;
    }
    catch (err) {
        throw ({ code: http_status_codes_1.StatusCodes.BAD_REQUEST, err: err });
    }
};
const edit = async (body, fastify) => {
    try {
        const { subjectId, subjectNames } = body;
        const add = await admin_1.default.findOneAndUpdate({ _id: subjectId }, { subjectNames: subjectNames }, { new: true });
        return add;
    }
    catch (err) {
        throw (err);
    }
};
const details = async (subjectId) => {
    try {
        const details = await admin_1.default.findOne({ _id: subjectId });
        return details;
    }
    catch (err) {
        throw err;
    }
};
const detailswith_multipleclassIds = async (body) => {
    try {
        const details = await admin_1.default.find({ classId: body.classId });
        return details;
    }
    catch (err) {
        throw err;
    }
};
exports.default = {
    add_subto_class,
    edit,
    details,
    detailswith_multipleclassIds
};
