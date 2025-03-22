const Chats = require("../models/chatbox");

async function handleSendingChatsData(request,reply){
    const data = await Chats.find({});
    console.log("Sending Chats Data to Frontend:", data);
    return data;
}

module.exports = {
    handleSendingChatsData,
}