import { createSlice } from '@reduxjs/toolkit'




export const permissionslice = createSlice({
  name: 'permissionReducer',
  initialState:[],
  reducers: {
  
    loadpermissiondata: (state, action) => {
        console.log(action.payload)
      action.payload.map((permission) => {
            state.push(permission);
        });
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { loadpermissiondata } = permissionslice.actions

export default permissionslice.reducer