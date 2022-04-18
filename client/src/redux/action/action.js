import {GET_CONTACT} from "./actionTypes"
import axios from 'axios'

export const getcontacts =()=>async(dispatch)=>{
 try {
     const res = await axios.get('/api/users/getuser')

     dispatch({
         type : GET_CONTACT ,
         payload : res.data
     })
 } catch (error) {
    console.log(error) 
 }

}

export const addcontacts=(newcontact)=>async(dispatch)=>{
    try {
        await axios.post('/api/users/adduser' , newcontact)
        dispatch(getcontacts())
    } catch (error) {
       console.log(error) 
    }
}


export const deletecontacts=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/users/deleteuser/${id}`)
        dispatch(getcontacts())
    } catch (error) {
       console.log(error) 
    }
}

export const editcontacts =(contact , id)=>async(dispatch)=>{
    try {
        
       await axios.put(`/api/users/edituser/${id}` , contact) 
       dispatch(getcontacts())
    } catch (error) {
       console.log(error) 
    }

}
