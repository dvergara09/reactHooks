import React, {
  useState,
  useEffect,
  useContext,
  useReducer,
  useMemo,
  useRef
} from 'react'
import ThemeContext from '../context/ThemeContext'

const initialState = {
  favorites: []
}

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      }
    default:
      return state
  }
}

const Characters = () => {
  const [characters, setCharacters] = useState([])
  const { theme } = useContext(ThemeContext)
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState)
  const [search, setSearch] = useState('')
  const searchInput = useRef(null)

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
  }, [])

  const CharactersClasses = theme
    ? 'relative bg-gray-800 text-white'
    : 'relative bg-white'

  const handleClick = (favorite) => {
    console.log(favorite)
    dispatch({ type: 'ADD_TO_FAVORITES', payload: favorite })
  }

  const handleSearch = () => {
    setSearch(searchInput.current.value)
  }

  /* const filteredUsers = characters.filter((user) => {
    return user.name.toLowerCase().includes(search.toLowerCase())
  }) */

  const filteredUsers = useMemo(
    () =>
      characters.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase())
      }),
    [characters, search]
  )

  return (
    <div className={CharactersClasses}>
      {favorites.favorites.length > 0 && (
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-extrabold">Favorites</h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {favorites.favorites.map((favorite, index) => (
              <div key={`${index}-${favorite.id}`} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={favorite.image}
                    alt={favorite.name}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm">
                      <a href={favorite.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {favorite.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm ">{favorite.species}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight">
          Characters Rick and Morty
        </h2>
        <div>
          <input
            ref={searchInput}
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            onChange={handleSearch}
            placeholder="Search"
          />
        </div>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {filteredUsers.map((character) => (
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
                  <h3 className="text-sm">
                    <a href={character.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {character.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm ">{character.species}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleClick(character)}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Agregar a Favoritos
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Characters
