import React, { useState } from 'react'
import { FcCalendar } from "react-icons/fc";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import useDarkMode from './Hooks/useDarkMode';

const Header = () => {

  const [isDark, toggleDarkMode] = useDarkMode();
  
  return (
    <header className='bg-white dark:bg-gray-800 shadow px-4 py-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <h1 className='flex items-center justify-center gap-3 text-2xl font-bold'><FcCalendar className='w-20' />Task Manager</h1>



        <button
        onClick={toggleDarkMode}
        className='text-xl p-2 rounded transition-colors'
        title='Toggle Dark Mode'
        >
          {isDark ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </header>
  )
}

export default Header
