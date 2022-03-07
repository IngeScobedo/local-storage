
const { clients } = require('../models/Server')
const File = require('../models/File')

const eventsHandler = async (request, response) => {
  const { username } = request.params
  const headers = {
    'Content-Type': 'text/event-stream',
    Connection: 'keep-alive',
    'Cache-Control': 'no-cache'
  }
  response.writeHead(200, headers)

  const files = await File.find({ user: username })

  const data = `data: ${JSON.stringify(files)}\n\n`
  console.log({
    bestfiles: { data, files },
    bestfilestwo: username
  })
  response.write(data)

  const clientId = Date.now()

  const newClient = {
    username,
    id: clientId,
    response
  }
  clients.push(newClient)

  console.log({ alana: clients })
  request.on('close', () => {
    console.log(`${username} Connection closed`)
    clients.splice(clients.indexOf(newClient), 1)
    console.log({ clients })
  })
}

module.exports = eventsHandler
