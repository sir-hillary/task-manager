import React, { useState } from 'react'

const TaskInput = ({ onAdd }) => {

  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmed = input.trim();

    if (!trimmed) return;

    onAdd(trimmed);
    setInput("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded shadow'
    >
      <input
        type="text"
        placeholder='Add a new task here.....'
        value={input}
        onChange={(e)=>{ setInput(e.target.value)}}
        className='flex flex-grow px-2 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400'
      />
      <button
        type='submit'
        className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition'
      >
          Add
      </button>
    </form>
  )
}

export default TaskInput
