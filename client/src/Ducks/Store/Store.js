import React from 'react';
import { configureStore } from '@reduxjs/toolkit'
import Input_reducer from '../Slice/InputSlice'
import Like_reducer from '../Slice/LikeSlice'
import Logout_reducer from '../Slice/LogoutSlice'
import Header_reducer from '../Slice/HeaderSlice'

    let store = configureStore({ 
    reducer: {
      input: Input_reducer,
      like: Like_reducer,
      logout_modal: Logout_reducer,
      header: Header_reducer
    }, 
  })  
  export default store