import request from 'superagent'

const tasksUrl = '/api/v1/tasks/'

export function getTasks () {
  return request
    .get(tasksUrl)
    .then(response => response.body)
}
