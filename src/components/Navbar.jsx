import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (

    <header className='header'>
      <NavLink to='/'>
        <img src='https://i.pinimg.com/564x/19/aa/62/19aa62c021428dab53452e69ef6d34a3.jpg' alt='logo' className='w-8 h-8 object-contain' />
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-black-600" : "text-black-400" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-black-600" : "text-black-400"}>
          Projects
        </NavLink>
      </nav>
    </header>

    
  )
}

export default Navbar
