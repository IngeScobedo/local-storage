const File = require("../models/File");
const { facts, clients } = require("../models/Server");

  const sendEventsToAll = (newFact) => {
    clients.forEach(client => client.response.write(`data: ${JSON.stringify(newFact)}\n\n`))
  }
  
  const addFact = async (request, response) => {
    const newFact = request.body;
    const file = new File({content: newFact})
    await file.save()
    facts.push(newFact)
    response.json(newFact)
    return sendEventsToAll(newFact);
  }
  
  module.exports = addFact