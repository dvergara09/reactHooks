import React, { useState, useEffect } from 'react'

const Characters = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
  }, [])
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Characters Rick and Morty
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {characters.map((character) => (
            <div key={character.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={character.image}
                  alt={character.name}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={character.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {character.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {character.species}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Characters
