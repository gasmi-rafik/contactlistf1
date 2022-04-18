import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { editcontacts } from '../redux/action/action'
const EditContact = ({name , email , phone , setEmail , setName , setPhone , id }) => {
console.log("iddd" , id)
 const dispatch = useDispatch()
 const handleEdit=()=>{
    
     dispatch(editcontacts({name , email , phone} , id))
 }
    return (
    <div>
                <input type="text" placeholder='enter your name' value={name} onChange={(e)=>setName(e.target.value)}/>
                <input type="text" placeholder='enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="text" placeholder='enter your phone'value={phone} onChange={(e)=>setPhone(e.target.value)}/>
               <Link to={"/"}> <button onClick={handleEdit}>submit edit</button> </Link>
    </div>
  )
}

export default EditContact