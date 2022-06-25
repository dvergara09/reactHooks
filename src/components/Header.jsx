import React, { useState } from 'react'

const Header = () => {
  const [darkMode, setDarkMode] = useState(false)

  const handleClick = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className="Header">
      {/* Se pueden usar ambas formas, pero es mas
      limpio usar la primera con el handle */}
      <h1>ReactHooks</h1>
      <button type="button" onClick={handleClick}>
        {darkMode ? 'Dark mode' : 'Ligth mode'}
      </button>
      <button
        type="button"
        onClick={() => {
          setDarkMode(!darkMode)
        }}
      >
        {darkMode ? 'Dark mode2' : 'Ligth mode2'}
      </button>
    </div>
  )
}

export default Header
