import {configureStore} from '@reduxjs/toolkit';
import permissionReducer from './permission/permissionslice';



export const store = configureStore({
  reducer: {
    data: permissionReducer,
  },
});