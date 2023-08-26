import React from 'react'
import { BiCheckCircle } from 'react-icons/bi'
import { BsTrash3 } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { updateTask, removeTask } from '../redux/taskSlice'

const CustomList = ({ id, task }) => {
  const index = id
  const dispatch = useDispatch()

  const isExceeded = (taskDate) => {
    const currentDate = new Date(Date.now())
    const date = new Date(taskDate)
    return date < currentDate
  }

  const handleStatusChange = () => {
    dispatch(updateTask(index))
  }

  const handleRemove = () => {
    dispatch(removeTask(id))
  }

  return (
    <div className={`flex flex-row ${isExceeded(task.date) ? 'bg-orange-600' : task.done ? 'bg-green-400' : 'bg-gray-300'}  rounded-xl w-[70vw] m-2 px-8 py-2 justify-between items-center shadow-md`}>
      <div className='flex flex-col'>
        <h2 className='text-2xl '>{task.title}</h2>
        <div className='flex flex-row'>
          <p>{task.description}</p>
          <p className='ml-4'>
            <strong>expire: </strong>
            {task.date}
          </p>
        </div>
      </div>
      <div className='flex items-center gap-3'>
        {!task?.done && (
          <button onClick={handleStatusChange}>
            <BiCheckCircle
              size={25}
              className='hover:text-green-500'
            />
          </button>
        )}
        <button onClick={handleRemove}>
          <BsTrash3
            size={25}
            className='hover:text-red-500'
          />
        </button>
      </div>
    </div>
  )
}

export default CustomList
