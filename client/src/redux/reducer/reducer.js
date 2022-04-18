
import {GET_CONTACT} from '../action/actionTypes'
const intialState ={
    contacts : []
}
const reducer = ( state = intialState , action) => {
    switch (action.type) {
        case GET_CONTACT:
            return ({...state , contacts : action.payload.users })
           
    
        default:
            return state
    }
 
}

export default reducer