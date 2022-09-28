import React from 'react'
import NavBar from './NavBar'
import ToDoList from './ToDoList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddTask from './AddTask'
import SharedLayout from './SharedLayout'
class App extends React.Component {
  render() {
    return (
      <section id='todo'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SharedLayout />}>
              <Route index element={<ToDoList />} />
              <Route path='add-task' element={<AddTask />} />
              <Route path='add-task' element={<AddTask />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </section>
    )
  }
}

export default App
