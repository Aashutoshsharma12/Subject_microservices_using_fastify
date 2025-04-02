"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = authRoute;
const http_status_codes_1 = require("http-status-codes");
const subject_1 = __importDefault(require("../../controllers/admin/subject"));
async function authRoute(fastify) {
    fastify.post('/add', async (req, reply) => {
        const data = await subject_1.default.add_subto_class(req.body, fastify);
        reply.status(http_status_codes_1.StatusCodes.CREATED).send({ data: data, code: http_status_codes_1.StatusCodes.CREATED });
    });
    fastify.post('/edit', async (req, reply) => {
        try {
            const data = await subject_1.default.edit(req.body, fastify);
            reply.status(http_status_codes_1.StatusCodes.CREATED).send({ data: data, code: http_status_codes_1.StatusCodes.CREATED });
        }
        catch (err) {
            reply.code(http_status_codes_1.StatusCodes.BAD_REQUEST).send({ error: err, code: http_status_codes_1.StatusCodes.BAD_REQUEST });
        }
    });
    fastify.get('/details/:id', async (req, reply) => {
        const data = await subject_1.default.details(req.params.id);
        reply.status(http_status_codes_1.StatusCodes.OK).send({ data: data, code: http_status_codes_1.StatusCodes.OK });
    });
    fastify.post('/detailswith_multipleclassIds', async (req, reply) => {
        const data = await subject_1.default.detailswith_multipleclassIds(req.body);
        reply.status(http_status_codes_1.StatusCodes.OK).send({ data: data, code: http_status_codes_1.StatusCodes.OK });
    });
}
