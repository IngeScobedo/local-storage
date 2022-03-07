const File = require('../models/File')
const { facts, clients } = require('../models/Server')

const sendEventsToAll = (newFact) => {
  clients.forEach(client => client.response.write(`data: ${JSON.stringify(newFact)}\n\n`))
}

const addFact = async (request, response) => {
  const factRequest = request.body
  const file = new File({ content: factRequest })
  const fileSaved = await file.save()

  console.log(fileSaved)
  const { content, _id } = fileSaved
  console.log(_id)

  const { info, source } = content
  facts.push({
    _id,
    info,
    source
  })
  response.json({
    _id,
    info,
    source
  })
  const newFact = {
    content: {
      _id,
      info,
      source
    }
  }
  return sendEventsToAll(newFact)
}

module.exports = addFact
