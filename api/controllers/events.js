const File = require("../models/File");
const { clients } = require("../models/Server");

const eventsHandler = async (request, response) => {
    const headers = {
      'Content-Type': 'text/event-stream',
      'Connection': 'keep-alive',
      'Cache-Control': 'no-cache'
    };
    response.writeHead(200, headers);

    const facts = await File.find({})
  
    const data = `data: ${JSON.stringify(facts)}\n\n`;
  
    response.write(data);
  
    const clientId = Date.now();
  
    const newClient = {
      id: clientId,
      response
    };
  
    clients.push(newClient);
    console.log(clients.length)
  
    request.on('close', () => {
      console.log(`${clientId} Connection closed`);
      clients.splice(clients.indexOf(newClient), 1);
    });
  }

    module.exports = eventsHandler