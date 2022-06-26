import React, { useState, useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
import { Disclosure } from '@headlessui/react'

const Header = () => {
  const [darkMode, setDarkMode] = useState(false)
  const { theme, setTheme } = useContext(ThemeContext)

  const handleClick = () => {
    setDarkMode(!darkMode)
    setTheme(!theme)
  }

  const HeaderClasses = theme
    ? 'Header relative bg-gray-800 text-white'
    : 'Header relative bg-white'

  return (
    <div className="Header">
      <Disclosure as="nav" className={HeaderClasses}>
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <button
                    type="button"
                    onClick={handleClick}
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Dark Mode
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      </Disclosure>
    </div>
  )
}

export default Header
