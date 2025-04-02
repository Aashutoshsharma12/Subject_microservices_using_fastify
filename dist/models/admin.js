"use strict";
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    classId: { type: String, required: true },
    subjectNames: [],
    isActive: { type: Boolean, default: true },
    isDelete: { type: Boolean, default: false }
}, {
    timestamps: true
});
const subjectModel = (0, mongoose_1.model)('subject', schema);
module.exports = subjectModel;
