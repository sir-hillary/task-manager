import React from 'react'
import { FaTrashCan } from "react-icons/fa6";

const TaskList = ({ tasks, toggleTaskComplete, onDelete }) => {

  if (tasks.length === 0) {
    return (
      <p className='text-center text-gray-500 dark:text-gray-400'>
        No Tasks yet. Add One Above
      </p>
    );
  }

  return (
    <ul className='space-y-3'>
      {
        tasks.map((task) => (
          <li key={task.id} className='flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded shadow'>

            <div className='flex items-cent gap-3'>

              <input type="checkbox" checked={task.completed}  onChange={()=> toggleTaskComplete(task.id)} className='accent-blue-600 w-5 h-5'/>

              <span className={`${task.completed ? "line-through text-gray-400" : ""}`}>
                {task.text}
              </span>

              <span className='text-sm text-gray-400'>
                #{task.id}
              </span>
            </div>

            <button
            onClick={()=>onDelete(task.id)}
            className='text-red-500 hover:text-red-600 transition'
            title='Delete Task'
            ><FaTrashCan  size={20}/></button>

          </li>
        ))
      }
    </ul>
  )
}

export default TaskList
