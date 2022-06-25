import React, { useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { Switch } from '@headlessui/react'

const Header = () => {
  const [darkMode, setDarkMode] = useState(false)

  const handleClick = () => {
    setDarkMode(!darkMode)
  }
  const [enabled, setEnabled] = useState(false)

  return (
    /*  <div className="Header">
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
    </div> */
    <Disclosure as="nav" className="bg-gray-800">
      <>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="py-16">
                <Switch
                  checked={enabled}
                  onChange={setEnabled}
                  className={`${enabled ? 'bg-teal-900' : 'bg-teal-700'}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                  <span className="sr-only">Use setting</span>
                  <span
                    aria-hidden="true"
                    className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                  />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </>
    </Disclosure>
  )
}

export default Header
