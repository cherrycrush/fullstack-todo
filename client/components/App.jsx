import React, { useEffect } from 'react'
import AddTodo from './AddTodo'

function App () {
  useEffect(() => {

  }, [])

  return (
    <>
      <header className="header">
        <h1>Aaron's To Do List</h1>
        <AddTodo />
      </header>
      <section className="main"></section>
      <footer className="footer"></footer>
    </>
  )
}

export default App
