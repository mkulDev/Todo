import CustomList from './components/CustomList'
import InputBar from './components/InputBar'
import { useSelector } from 'react-redux'
function App() {
  const tasks = useSelector((state) => state.tasks)
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-3xl my-10 font-bold'>Task List</h1>
      <InputBar />
      {tasks.length > 0 && (
        <div className='px-6 py-4 border-2 rounded-xl border-'>
          {tasks?.map((element, index) => (
            <CustomList
              key={index}
              id={index}
              task={element}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default App
