"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = void 0;
const rabbitmq_1 = require("./rabbitmq");
const sendMessage = async (queue, body) => {
    const { channel } = await (0, rabbitmq_1.connectRabbitMQ)();
    await channel.assertQueue(queue, { durable: true });
    channel.sendToQueue(queue, Buffer.from(JSON.stringify(body)), { persistent: true });
    console.log(`✅ Sent message: ${JSON.stringify(body)}`);
    setTimeout(() => channel.close(), 500);
};
exports.sendMessage = sendMessage;
