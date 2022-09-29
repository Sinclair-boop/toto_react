import React from 'react'
import Todo from './Todo'
const ToDoList = ({tasks}) => {
  // const { tasks } = props
  // console.log(props)

  return (
    <>
      <h1 className='m-3'>Liste de tâches</h1>
      <ul className='list-group m-3'>
        {/* {tasks && tasks.map((task) => <Todo task={task} />)} */}
        {tasks.map((task) => <Todo task={task} key={task.id}/>)}
      </ul>
    </>
  )
}

export default ToDoList
