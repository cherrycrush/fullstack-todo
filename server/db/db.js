const config = require('./knexfile').development
const connection = require('knex')(config)

function getTasks (db = connection) {
  return db('tasks').select('id', 'task')
}

function addTask (task, db = connection) {
  return db('tasks').insert({
    task: task
  })
}

function delTask (id, db = connection) {
  return db('tasks')
    .del()
    .where('id', id)
}

function updateTask (id, db = connection) {
  return db('tasks').select(id)
}

module.exports = {
  getTasks,
  addTask,
  delTask,
  updateTask
}
