const {handleSendingChatsData} = require("../controllers/UiControllers");

async function uiRouters(fastify,options){
    fastify.get("/getchats",handleSendingChatsData);
}

module.exports = uiRouters;