import { configureStore } from '@reduxjs/toolkit'
import carSliceReducer from './carsSlice'

export const store = configureStore({
  reducer: {

    car : carSliceReducer
  },
 
})