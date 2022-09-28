import React from 'react'
import Todo from './Todo'
const ToDoList = (props) => {
  const { tasks } = props
  console.log(props)

  return (
    <>
      <h1 className='m-3'>Liste de tâches</h1>
      <ul className='list-group m-3'>
        {tasks && tasks.map((task) => <Todo task={task} />)}
      </ul>
    </>
  )
}

export default ToDoList
