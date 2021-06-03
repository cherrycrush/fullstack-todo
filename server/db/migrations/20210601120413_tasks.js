exports.up = (knex) => {
  return knex.schema.createTable('tasks', (table) => {
    table.integer('id')
    table.string('task')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('tasks')
}
