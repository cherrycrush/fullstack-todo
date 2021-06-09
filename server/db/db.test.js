const testEnv = require('../test-environment')
const db = require('./db')

let testDb = null

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))

test('deletes a task by id', () => {
  const taskId = 1
  return db.delTask(taskId, testDb)
    .then(result => {
      expect(result).toEqual(1)
      return null
    })
})

test('adds a new task', () => {
  const taskId = '4'
  return db.addTask(taskId, testDb)
    .then(result => {
      expect(result).toEqual([4])
      return null
    })
})
