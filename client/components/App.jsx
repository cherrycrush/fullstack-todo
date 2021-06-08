import React, { useEffect, useState } from 'react'
import AddTodo from './AddTodo'
import { getTasks } from '../apis/api'

function App () {
  const [tasks, setTasks] = useState([])
  const [taskButton, setAddTaskButton] = useState(false)

  useEffect(() => {
    loadTasks()
  }, [])

  function loadTasks () {
    getTasks()
      .then(tasks => {
        setTasks(tasks)
        return null
      })
      .catch(err => console.log(err))
  }

  function renderForm () {
    setAddTaskButton(true)
  }

  return (
    <>
      <header className="header">
        <h1>Aaron's To Do List</h1>
        <ul>
          {tasks.map((task) => <li key={task.id}>{task.task}</li>)}
        </ul>
        <AddTodo />
      </header>
      <section className="main">
        <button onClick={renderForm}>Add Task</button>
      </section>
      <footer className="footer"></footer>
    </>
  )
}

export default App
