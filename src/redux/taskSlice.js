import { createSlice } from '@reduxjs/toolkit'

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [{ title: 'Car washing', description: 'important , wedding next month', done: false, date: '2023-06-31' }],
  reducers: {
    addTask: {
      reducer: (state, action) => {
        if (typeof action.payload === 'object') state.push(action.payload)
      }
    },
    removeTask: {
      reducer: (state, action) => {
        const id = action.payload
        return state.filter((task, index) => index !== id)
      }
    },
    updateTask: {
      reducer: (state, action) => {
        const id = action.payload
        return state.map((task, index) => {
          if (index === id) return { ...task, done: true }
          return task
        })
      }
    }
  }
})

export const { addTask, updateTask, removeTask } = taskSlice.actions
export default taskSlice.reducer
