require('dotenv').config()
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, '/client/build')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/dossier', { useNewUrlParser: true, useUnifiedTopology: true })
const testSchema = new mongoose.Schema({ test: String })
const Test = mongoose.model('Test', testSchema)

app.get('/api', (req, res) => {
  res.send("<form action='/api/test' method='POST'><input type='text' name='test' /><input type='submit' value='Submit' /></form>")
})

app.post('/api/test', (req, res) => {
  const testData = new Test(req.body)
  testData.save()
    .then(() => {
      console.log(testData)
      res.redirect('/api')
    })
    .catch(err => {
      console.log(err)
    })
})

app.get('/api/test', (req, res) => {
  Test.find({}, (err, tests) => {
    return res.end(JSON.stringify(tests))
  })
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'))
})

app.listen(port, () => console.log(`Dossier backend is listening on port ${port}`))
