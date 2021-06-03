exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { id: 1, task: 'Grab a coffee' },
        { id: 2, task: 'Walk the dog' },
        { id: 3, task: 'Code for 1 hour' }
      ])
    })
}
