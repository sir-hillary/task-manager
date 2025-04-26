import React, { useState } from 'react'
import Header from './Components/Header'
import TaskInput from './Components/TaskInput'
import TaskList from './Components/TaskList'
import FilterBar from './Components/FilterBar'
import Footer from './Components/Footer'
import ConfirmModal from './Components/ConfirmModal'


const App = () => {

  const [tasks, setTasks] = useState([]);

  const [showConfirm, setShowConfirm] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [filters, setFilters] = useState("all");

  const handleTasks = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTasks([newTask, ...tasks]);
  }

  const toggleTaskComplete = (id) => {
    const updatedTasks = tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task);

    setTasks(updatedTasks);
  };

  {/* this was the initial deleting code  without the confirmation modal */ }
  /*const handleDelete = (id)=>{
    const deleted = tasks.filter((task)=> task.id !==id);
  
  
    setTasks(deleted);
  }*/


  {/*with confirmation modal8*/ }


  const requestDelete = (id) => {
    setTaskToDelete(id);
    setShowConfirm(true);
  }


  const confirmDelete = () => {
    setTasks(tasks.filter((task) => task.id !== taskToDelete));
    setShowConfirm(false);
    setTaskToDelete(null);
  };

  const CancelDelete = () => {
    setShowConfirm(false);
    setTaskToDelete(null);
  };

  const filteredTasks = tasks.filter((task)=>{
    if(filters === "active") return !task.completed;
    if(filters === "completed") return task.completed;
    return true;
  })


  return (
    <div className='min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors'>
      <Header />


      <main className='flex-grow container mx-auto px-4 py-6 space-y6'>
        <TaskInput onAdd={handleTasks} />
        <TaskList tasks={filteredTasks} toggleTaskComplete={toggleTaskComplete} onDelete={requestDelete} />
        <FilterBar currentFilters={filters} onChange={setFilters} />
      </main>

      <Footer />

      <ConfirmModal showConfirm={showConfirm} onConfirm={confirmDelete} onCancel={CancelDelete} />
    </div>
  )
}

export default App
