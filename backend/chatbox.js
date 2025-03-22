const mongoose = require("mongoose");

// Create a schema
const chatSchema = new mongoose.Schema({
    conversationID: {
        type: String,
        required: true
    },
    userID: {
        type: String,
        required: true
    },
    sender: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    createdAT: {
        type: Date,
        default: Date.now 
    }
});

// Create a new model
const Chats = mongoose.model("Chats", chatSchema);

module.exports = Chats;
