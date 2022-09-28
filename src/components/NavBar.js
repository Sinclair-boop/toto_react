import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import { FaListAlt, FaCheckSquare, FaPlusSquare, FaTrash } from 'react-icons/fa'
const NavBar = () => (
  <footer
    className='d-flex justify-content-between bg-secondary p-3'
    id='mainFooter'
    style={{ border: '1px solid #fff' }}
  >
    <div
      className='btn-group justify-content-between d-flex'
      style={{ width: '100%' }}
    >
      <div>
        <NavLink to='/' className='btn btn-outline-dark bg-light'>
          <FaListAlt />
        </NavLink>
        <NavLink to='/completed' className='btn btn-outline-dark bg-light'>
          <FaCheckSquare />
        </NavLink>
        <NavLink to='/add-task' className='btn btn-outline-dark bg-light'>
          <FaPlusSquare />
        </NavLink>
      </div>
      <div>
        <button className='btn btn-outline-dark bg-light'>
          <FaTrash />
        </button>
      </div>
    </div>
  </footer>
)

export default NavBar
