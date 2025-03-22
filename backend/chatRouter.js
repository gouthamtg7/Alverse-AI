//Routes used for USER-CHATGPT Flow

const { talk2Chatgpt } = require("../controllers/chatController");

async function chatgptRouters(fastify, options) {
    // ✅ Explicitly allow CORS for this route
    fastify.post("/talktochatgpt", {
        preHandler: (req, reply, done) => {
            reply.header("Access-Control-Allow-Origin", "*");
            reply.header("Access-Control-Allow-Methods", "POST, OPTIONS");
            reply.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
            done();
        },
    }, talk2Chatgpt);

    // ✅ Handle CORS Preflight Request
    fastify.options("/talktochatgpt", async (request, reply) => {
        reply.header("Access-Control-Allow-Origin", "*");
        reply.header("Access-Control-Allow-Methods", "POST, OPTIONS");
        reply.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
        return reply.send();
    });
};

module.exports = chatgptRouters;