import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {loadpermissiondata} from '../../Redux/permission/permissionslice'
function Permission() {
    const dispatch = useDispatch();
    
    
    useEffect(()=>{
     axios.get('http://localhost:5000/staff/alluser').then((result)=>
        dispatch(loadpermissiondata(result.data)))
         
    },[])
    const data = useSelector((state) => state.data);
    console.log(data)
  return (  

  
    <div>Permission</div>
  )
}

export default Permission