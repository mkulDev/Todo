import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/taskSlice'
import { getCurrentDate } from '../features/currentDate'
const InputBar = () => {
  const dispatch = useDispatch()
  const taskDataObj = {
    title: '',
    description: '',
    date: ''
  }
  const [taskData, setTaskData] = useState(taskDataObj)

  // check if button should be disabled
  const isDisabled = !Boolean(taskData.title && taskData.description && taskData.date >= getCurrentDate())

  //Should works for both input field
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setTaskData({
      ...taskData,
      //Computed property names -remember important!!!
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addTask({ ...taskData, done: false }))
    setTaskData(taskDataObj)
  }

  return (
    <div className='flex justify items-end mb-8'>
      <div className='flex flex-col items-end'>
        <h2 className='mr-2 text-sm'>Title:</h2>
        <input
          placeholder='Add title for your task'
          type='text'
          id='taskTitle'
          name='title'
          value={taskData.title}
          onChange={handleInputChange}
          className='py-3 px-4 bg-gray-200 rounded-l-lg focus:outline-none h-[60px]'
        />
      </div>
      <div className='flex flex-col items-end'>
        <h2 className='mr-2 text-sm'>Description:</h2>
        <input
          placeholder='Add description'
          type='text'
          id='taskDescription'
          name='description'
          value={taskData.description}
          onChange={handleInputChange}
          className='py-3 px-4 bg-gray-200 border-l-2 border-gray-400 focus:outline-none h-[60px]'
        />
      </div>
      <div className='flex flex-col items-end'>
        <h2 className='mr-2 text-sm'>Deadline:</h2>
        <input
          type='date'
          min={getCurrentDate()}
          max={'2025-12-31'}
          name='date'
          value={taskData.date}
          onChange={handleInputChange}
          className='py-3 px-4 bg-gray-200 border-l-2 border-gray-400 focus:outline-none h-[60px] rounded-r-lg cursor-pointer'
        />{' '}
        {console.log(getCurrentDate())}
      </div>
      <button
        onClick={handleSubmit}
        disabled={isDisabled}
        className={`py-3 px-8  ${isDisabled ? ' bg-gray-200' : 'bg-green-600 text-white'}  ml-4 rounded-xl h-[60px] hover:opacity-60`}
      >
        Add task
      </button>
    </div>
  )
}

export default InputBar
