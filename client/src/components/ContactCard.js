import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deletecontacts } from '../redux/action/action'
const ContactCard = ({el , getuser}) => {
  const dispatch = useDispatch()
  const handledelete =()=>{
    dispatch(deletecontacts(el._id))
  }
  return (
    <div style={{ border:'solid red' , width:"360px" }}>
      {el.name} <br/>
      {el.email} <br/>
      {el.phone} <br/>
      <Link to={`/edit-contact`}><button onClick={()=>getuser(el)}>edit</button> </Link><button onClick={handledelete}> delete</button>
    </div>
  )
}

export default ContactCard