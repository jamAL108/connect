import {
    BLOGDATA
    
} from '../action';

const initialstate ={
    data:{}
}


const props =(state=initialstate , action) =>{
    switch(action.type){
        case BLOGDATA:
            return{
                ...state , data:action.payload
            }      
        default:
            return state;    
    }
}

export default props;
