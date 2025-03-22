const { askChatgpt } = require("../services/chatgptService");

async function talk2Chatgpt(request, reply) {
    const { message } = request.body;
    if (!message) return reply.status(400).send({ msg: "Message is required" });

    // ✅ Hijack response so Fastify does not automatically close it
    reply.hijack();

    // ✅ Set SSE headers
    reply.raw.setHeader("Content-Type", "text/event-stream");
    reply.raw.setHeader("Cache-Control", "no-cache");
    reply.raw.setHeader("Connection", "keep-alive");
    reply.raw.flushHeaders(); 

    // ✅ Send initial processing status
    reply.raw.write(`data: ${JSON.stringify({ status: "processing" })}\n\n`);

    try {
        // ✅ Fetch AI Response
        const aiResponse = await askChatgpt(message);
        console.log("AI Response:", aiResponse);

        // ✅ Send AI response as SSE
        reply.raw.write(`data: ${JSON.stringify({ status: "completed", msg: aiResponse })}\n\n`);
        reply.raw.end(); 
    } catch (error) {
        console.error("AI Error:", error);
        reply.raw.write(`data: ${JSON.stringify({ status: "error", msg: "Failed to get response" })}\n\n`);
        reply.raw.end();
    }
}

module.exports = { talk2Chatgpt };
