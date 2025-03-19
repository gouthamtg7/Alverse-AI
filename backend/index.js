const fastify = require("fastify")({logger : true});
require('dotenv').config();



//Endpoint to connect to frontend 
fastify.register(require("@fastify/cors"), {
    origin: "*",
    methods : ["GET","POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders : ["Content-type", "Authorization"]});


    //Testing FRONTEND to BACKEND endpoint
fastify.get("/api/test",(request,reply)=>{
    return {message : "Hello from backend"}
}) 

//Started Server 
const start = async () =>{
    try{
        const address = fastify.listen({port : process.env.PORT});
        console.log(`Server Started At ${address}`);
    }
    catch(error){
        fastify.log.error(error);
        process.exit(1);
    }
}

start();