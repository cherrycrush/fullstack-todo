const config = require('./knexfile').development
const db = require('knex')(config)

function getTasks (db) {
  return db('tasks').select('id', 'task')
}

function addTask (task, db) {
  return db('tasks').insert(task)
}

function delTask (id, db) {
  return db('tasks').where(id)
}

function updateTask (id, db) {

}

module.exports = {
  getTasks,
  addTask,
  delTask,
  updateTask
}
