import React from 'react'

const Search = ({ search, searchInput, handleSearch }) => {
  return (
    <div>
      <input
        ref={searchInput}
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        onChange={handleSearch}
        placeholder="Search"
      />
    </div>
  )
}

export default Search
