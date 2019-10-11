require('dotenv').config()
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const herokuSslRedirect = require('heroku-ssl-redirect')
const app = express()
const port = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, '/client/build')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(herokuSslRedirect())

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/dossier', { useNewUrlParser: true, useUnifiedTopology: true })
const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
  projectURL: String,
  githubURL: String,
  badges: Array
})
const Project = mongoose.model('Project', projectSchema)

app.get('/api', (req, res) => {
  res.send("<form action='/api/projects' method='POST'><input type='text' name='name' placeholder='Name' /><input type='text' name='description' placeholder='Description' /><input type='text' name='projectURL' placeholder='Project URL' /><input type='text' name='githubURL' placeholder='GitHub URL' /><input type='checkbox' name='badges[]' value='BADGE' /><input type='submit' value='Add' /></form>")
})

app.post('/api/projects', (req, res) => {
  const projectData = new Project(req.body)
  projectData.save()
    .then(() => {
      console.log(projectData)
      res.redirect('/')
    })
    .catch(err => {
      console.log(err)
    })
})

app.get('/api/projects', (req, res) => {
  Project.find({}, (err, projects) => {
    return res.end(JSON.stringify(projects))
  })
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'))
})

app.listen(port, () => console.log(`Dossier backend is listening on port ${port}`))
