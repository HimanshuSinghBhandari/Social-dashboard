import React from 'react'
// ICONS.
import { MdSunny, MdDarkMode } from 'react-icons/md';

const Header = ({ darkMode, setDarkMode }) => {
  const handleToggleDarkMode = () => setDarkMode(!darkMode);
  return (
    <header className='flex items-center justify-between max-[500px]:flex-col py-5 mb-5'>
      <div>
        <h1 className={`font-bold text-3xl cursor-pointer ${darkMode ? 'text-white' : 'text-gray-900'}`}>Social Media Dashboard</h1>
        <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} max-[500px]:text-center`}>Total Followers: 23,004</p>
      </div>
      <button className={`inline-flex items-center ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-slate-100'} border-0 py-1.5 px-3 focus:outline-none rounded text-base font-semibold`} onClick={handleToggleDarkMode}>
        Theme {darkMode ? <MdSunny className='text-2xl ml-0.5' /> : <MdDarkMode className='text-2xl ml-0.5' />}
      </button>
    </header>
  )
}

export default Header;