import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddTask from './AddTask'
import DispositionPartage from './DispositionPartage'
import ToDoList from './ToDoList'
import NavBar from './NavBar'
import initialData from '../initialData'

const Appp = () => (
  <section id='todo'>
    <BrowserRouter>
      <Routes>
        <Route index element={<ToDoList />} />
        <Route path='/:filter' element={<ToDoList tasks={initialData} />} />
        <Route path='add-task' element={<AddTask />} />
        {/* <Route path='/:filter?' element={<AddTask />} /> */}
      </Routes>
      <NavBar />
    </BrowserRouter>
  </section>
)
export default Appp
