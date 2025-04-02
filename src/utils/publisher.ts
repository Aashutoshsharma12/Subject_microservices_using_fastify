import { connectRabbitMQ } from "./rabbitmq";

export const sendMessage = async (queue: any, body: any) => {
    const {channel} = await connectRabbitMQ();
    await channel.assertQueue(queue, { durable: true });
    channel.sendToQueue(queue, Buffer.from(JSON.stringify(body)), { persistent: true });
    console.log(`✅ Sent message: ${JSON.stringify(body)}`);
    setTimeout(() => channel.close(), 500);

};

