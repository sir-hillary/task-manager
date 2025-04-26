import React from 'react'

const FilterBar = ({ currentFilters, onChange}) => {

  const filters = ["all", "active", "completed"]

  return (
    <div className='flex justify-center gap-4 my-4'>

      {
        filters.map((filter)=> (
          <button key={filter} onClick={()=> onChange(filter)} className={`capitalize px-3 py-1 rounded transition ${currentFilters === filter ? "bg-blue-500" : "bg-gray-200 dark:bg-gray-800 dark:text-white" }`}>
            {filter}
          </button>
        ))
      }
      
    </div>
  )
}

export default FilterBar
