const express = require('express')
const path = require('path')

const server = express()
const tasks = require('./routes/tasks')

server.use('/', tasks)
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

module.exports = server
