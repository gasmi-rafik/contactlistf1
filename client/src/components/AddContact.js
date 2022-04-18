import React from 'react'
import { useDispatch } from 'react-redux'
import { addcontacts } from '../redux/action/action'
import { Link } from 'react-router-dom'
const AddContact = ({name , email , phone , setName , setEmail , setPhone}) => {
    const dispatch= useDispatch()

    const handleClick=()=>{
        dispatch(addcontacts({name ,email ,phone}))
    }
  return (
    <div>
        <input type="text" placeholder='enter your name' onChange={(e)=>setName(e.target.value)}/>
        <input type="text" placeholder='enter your email' onChange={(e)=>setEmail(e.target.value)}/>
        <input type="text" placeholder='enter your phone' onChange={(e)=>setPhone(e.target.value)}/>
       <Link to={"/"}> <button onClick={handleClick}>add</button> </Link>
    </div>
  )
}

export default AddContact