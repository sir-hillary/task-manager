import React from 'react'

const ConfirmModal = ({ showConfirm, onConfirm, onCancel }) => {

    if (!showConfirm) return null;

    return (
        <div className='fixed inset-0 flex items-center justify-center z-50 bg-black/50'>
            <div className='bg-white dark:bg-gray-800 p-6 rounded-lg w-80 text-center'>
                <h2 className='text-lg font-semibold text-gray-800 dark:text-white'>Confirm Deletion</h2>
                <p className='mt-2 text-sm text-gray-600 dark:text-gray-300'>Are you sure you want to delete this task?</p>


                <div className='mt-6 flex justify-around'> 
                    <button
                        onClick={onCancel}
                        className='px-4 py-2 text-sm rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600'
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className='px-4 py-2 text-sm rounded bg-red-500 text-white hover:bg-red-600'
                    >
                        Delete
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ConfirmModal
