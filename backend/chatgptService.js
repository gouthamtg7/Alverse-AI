const openai = require("openai");

//Connect API to OPENAI
const client = new openai.OpenAI(
    {
        apiKey : process.env.API_KEY
    }
);

//Sending prompt to AI
const completetion = async(msg) =>{
    const response = await client.chat.completions.create({
    model : "gpt-4o-mini",
    messages : [
        {
            role : "system",
            content : "You are a funny 35 year old."
        },
        {
            role : "user",
            content : msg
        },
    ],
    max_tokens: 256,
})
    return response;
};

async function askChatgpt(msg) {
    const response = await completetion(msg);
    console.log("Full Response:", response);
    console.log("AI Says:", response.choices[0].message.content);
    return response.choices[0].message.content;
}

module.exports = {
    askChatgpt,
}
