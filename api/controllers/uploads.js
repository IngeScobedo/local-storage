const File = require('../models/File')
const { clients } = require('../models/Server')

const sendEventsToAll = (newFact) => {
  clients.filter(client => client.username === newFact.id).forEach(client => client.response.write(`data: ${JSON.stringify(newFact)}\n\n`))
}

const uploads = async (req, res) => {
  const id = req.get('id')
  console.log({ aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa: req.files })
  const fileData = req.files.file
  if (!fileData) {
    return res.status(400).send('No file uploaded')
  }

  const { name } = fileData

  const file = new File({
    name,
    user: id
  })

  const fileSaved = await file.save()

  if (!fileSaved) {
    return res.status(400).send('File not saved')
  }

  console.log(name, fileData, id)

  fileData.mv(`uploads/${name}`, async err => {
    if (err) {
      console.log(err)
      return res.status(500).send(err)
    }
  })

  res.status(200).json({ name, fileData })

  const randomId = Math.floor((Math.random() * (9999999999 - 999 + 1)) + 999)

  const eventFile = {
    _id: randomId,
    name,
    id
  }

  return sendEventsToAll(eventFile)
}

module.exports = uploads
