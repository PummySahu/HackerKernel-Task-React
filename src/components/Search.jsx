import React from 'react'

const Search = ({searchitem, onSearch}) => {
    const handleChange = (e) => {
        onSearch(e.target.value);
      };

  return (
    <div className='px-7 py-6'>
      <input
        type="text"
        placeholder="Search Products"
        value={searchitem}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
      />
    </div>
  )
}

export default Search