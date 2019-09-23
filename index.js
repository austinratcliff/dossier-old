require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, '/client/build')))

app.get('/api/test', (req, res) => {
  const test = 'test'
  res.json(test)
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'))
})

app.listen(port, () => console.log(`Dossier backend is listening on port ${port}`))
