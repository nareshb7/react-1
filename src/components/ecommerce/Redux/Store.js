import  DataReducer  from './UserData/DataReducer'
import { configureStore} from '@reduxjs/toolkit'
import CartReducer from './Cart/CartReducer'
import { RootReducer } from './RootReducer'

export const store = configureStore({reducer: RootReducer})
