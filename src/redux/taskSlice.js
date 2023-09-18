import { createSlice } from '@reduxjs/toolkit'
const initialState = JSON.parse(localStorage.getItem('List')) || []
console.log(initialState)
const taskSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    addTask: {
      reducer: (state, action) => {
        if (typeof action.payload === 'object') {
          const newState = [...state, action.payload]
          localStorage.setItem('List', JSON.stringify(newState))
          return newState
        }
      }
    },
    removeTask: {
      reducer: (state, action) => {
        const id = action.payload
        const newState = state.filter((task, index) => index !== id)
        console.log(newState)
        localStorage.setItem('List', JSON.stringify(newState))
        return newState
      }
    },
    updateTask: {
      reducer: (state, action) => {
        const id = action.payload
        const updatedState = state.map((task, index) => {
          if (index === id) return { ...task, done: true }
          return task
        })

        localStorage.setItem('List', JSON.stringify(updatedState))
        return updatedState
      }
    }
  }
})

export const { addTask, updateTask, removeTask } = taskSlice.actions
export default taskSlice.reducer
