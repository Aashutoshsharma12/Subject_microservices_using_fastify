
import { StatusCodes } from "http-status-codes";
import auth from "../../controllers/admin/subject";
import { authorizeRoles } from "@utils/authenticate";
export default async function authRoute(fastify: any) {
    fastify.post('/add', async (req: any, reply: any) => {
        const data = await auth.add_subto_class(req.body, fastify);
        reply.status(StatusCodes.CREATED).send({ data: data, code: StatusCodes.CREATED });
    });
    fastify.post('/edit', async (req: any, reply: any) => {
        try {
            const data = await auth.edit(req.body, fastify);
            reply.status(StatusCodes.CREATED).send({ data: data, code: StatusCodes.CREATED });
        } catch (err) {
            reply.code(StatusCodes.BAD_REQUEST).send({ error: err, code: StatusCodes.BAD_REQUEST });
        }
    });
    fastify.get('/details/:id', async (req: any, reply: any) => {
        const data = await auth.details(req.params.id);
        reply.status(StatusCodes.OK).send({ data: data, code: StatusCodes.OK });
    });
    fastify.post('/detailswith_multipleclassIds', async (req: any, reply: any) => {
        const data = await auth.detailswith_multipleclassIds(req.body);
        reply.status(StatusCodes.OK).send({ data: data, code: StatusCodes.OK });
    });


}