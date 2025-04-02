"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.receiveMessages = void 0;
const rabbitmq_1 = require("./rabbitmq");
// export const receiveMessages = async () => {
//     const { channel } = await connectRabbitMQ();
//     // Declare multiple queues
//     const queues = ["user_details_queue", "delete_class_subject_queue1"];
//     for (const queue of queues) {
//         await channel.assertQueue(queue, {
//             durable: true
//         });
//         console.log("🚀 Waiting for messages...");
//         channel.consume(queue, async (msg: any) => {
//             if (msg) {
//                 const receivedData = JSON.parse(msg.content.toString());
//                 console.log(`📩 Received: ${JSON.stringify(receivedData)}`);
//                 // processMessage(queue, receivedData);
//                 // Acknowledge the message (removes from queue)
//                 channel.ack(msg);
//             }
//         }, { noAck: false });
//     }
// };
// const processMessage = async(queue: string, message: string) => {
//     if (queue === "delete_class_subject_queue") {
//         await subjectModel.findOneAndUpdate({ classId: message }, { isDelete: true }, { new: true })
//     }
// };
// /**
//  * Get message from topic
//  */
// export const receiveMessages = async () => {
//     const { channel } = await connectRabbitMQ();
//     const exchangeType = "topic"
//     const exchange = "class_delete_notification_usingTopic1";
//     const queue = "delete_class_subj_queue"
//     await channel.assertExchange(exchange, exchangeType, { durable: true });
//     let topic = 'subj.push'
//     await channel.assertQueue(queue, { durable: true });
//     await channel.bindQueue(queue, exchange, topic)
//     console.log("🚀 Waiting for messages...");
//     channel.consume(queue, async (msg: any) => {
//         if (msg) {
//             const receivedData = JSON.parse(msg.content.toString());
//             console.log(`📩 Received: ${JSON.stringify(receivedData)}`, "queue", queue);
//             // Acknowledge the message (removes from queue)
//             channel.ack(msg);
//         }
//     }, { noAck: false });
// };
/**
 * Get message from fanout
 */
// export const receiveMessages = async () => {
//     const { channel } = await connectRabbitMQ();
//     const exchangeType = "fanout"
//     const exchange = "class_delete_notification_usingFanout";
//     await channel.assertExchange(exchange, exchangeType, { durable: true });
//     const queue = await channel.assertQueue('', { exclusive: true });
//     await channel.bindQueue(queue.queue, exchange, '')
//     console.log("🚀 Waiting for messages...");
//     channel.consume(queue.queue, async (msg: any) => {
//         if (msg) {
//             const receivedData = JSON.parse(msg.content.toString());
//             console.log(`📩 Received: ${JSON.stringify(receivedData)}`, "queue", queue);
//             // Acknowledge the message (removes from queue)
//             channel.ack(msg);
//         }
//     }, { noAck: false });
// };
/**
 * Get message from Headers
 */
// export const receiveMessages = async () => {
//     const { channel } = await connectRabbitMQ();
//     const exchangeType = "headers"
//     const exchange = "class_delete_notification_using_header_exchange";
//     await channel.assertExchange(exchange, exchangeType, { durable: true });
//     const queue = await channel.assertQueue('', { exclusive: true });
//     const headers = {
//         "x-match": 'all',
//         "notification-type": "class_notification_to_subject",
//         "content-type": "notification"
//     }
//     await channel.bindQueue(queue.queue, exchange, '', headers)
//     console.log("🚀 Waiting for messages...");
//     channel.consume(queue.queue, async (msg: any) => {
//         if (msg) {
//             const receivedData = JSON.parse(msg.content.toString());
//             console.log(`📩 Received: ${JSON.stringify(receivedData)}`);
//             // Acknowledge the message (removes from queue)
//             channel.ack(msg);
//         }
//     }, { noAck: false });
// };
/**
 * Priority Base msg
 */
// export const receiveMessages = async () => {
//     const { channel } = await connectRabbitMQ();
//     // Declare multiple queues
//     const queue = "delete_class_subject_queue1";
//     await channel.assertQueue(queue, {
//         durable: true,
//         arguments: {
//             "x-max-priority": 10
//         }
//     });
//     console.log("🚀 Waiting for messages...");
//     channel.consume(queue, async (msg: any) => {
//         if (msg) {
//             const receivedData = JSON.parse(msg.content.toString());
//             console.log(`📩 Received: ${JSON.stringify(receivedData)}`);
//             // processMessage(queue, receivedData);
//             // Acknowledge the message (removes from queue)
//             channel.ack(msg);
//         }
//     }, { noAck: false });
// };
/**
 * Lazy Queue
 */
// export const receiveMessages = async () => {
//     const { channel } = await connectRabbitMQ();
//     // Declare multiple queues
//     const queue = "delete_class_subject_queue12121";
//     await channel.assertQueue(queue, {
//         durable: true,
//         arguments: {
//             // 'x-queue-mode': 'lazy',
//             "x-message-ttl": 5000
//         } // Enabling lazy queue
//     });
//     console.log("🚀 Waiting for messages...");
//     channel.consume(queue, async (msg: any) => {
//         if (msg) {
//             const receivedData = JSON.parse(msg.content.toString());
//             console.log(`📩 Received: ${JSON.stringify(receivedData)}`);
//             // processMessage(queue, receivedData);
//             // Acknowledge the message (removes from queue)
//             channel.ack(msg);
//         }
//     }, { noAck: false });
// };
/**
 * Expire Queue
 */
// export const receiveMessages = async () => {
//     const { channel } = await connectRabbitMQ();
//     // Declare multiple queues
//     const queue = "delete_class_subject_queue12121";
//     await channel.assertQueue(queue, {
//         durable: true,
//         arguments: {
//             "x-message-ttl": 5000
//         } // Enabling lazy queue
//     });
//     console.log("🚀 Waiting for messages...");
//     channel.consume(queue, async (msg: any) => {
//         if (msg) {
//             const receivedData = JSON.parse(msg.content.toString());
//             console.log(`📩 Received: ${JSON.stringify(receivedData)}`);
//             // processMessage(queue, receivedData);
//             // Acknowledge the message (removes from queue)
//             channel.ack(msg);
//         }
//     }, { noAck: false });
// };
/**
 * Delayed Queue
 */
const receiveMessages = async () => {
    const { channel } = await (0, rabbitmq_1.connectRabbitMQ)();
    // Declare multiple queues
    const processingQueue = "processing_queue";
    await channel.assertQueue(processingQueue, { durable: true });
    console.log("🚀 Waiting for messages...");
    channel.consume(processingQueue, async (msg) => {
        if (msg) {
            const receivedData = JSON.parse(msg.content.toString());
            console.log(`📩 Received: ${JSON.stringify(receivedData)}`);
            // Acknowledge the message (removes from queue)
            channel.ack(msg);
        }
    }, { noAck: false });
};
exports.receiveMessages = receiveMessages;
