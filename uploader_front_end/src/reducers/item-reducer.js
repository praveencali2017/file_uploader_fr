import {FETCH_ITEMS_PENDING, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_ERROR} from '../actions/index';

export default function(state={items: null}, action){
    switch(action.type){
        case FETCH_ITEMS_SUCCESS:
            let data = action.payload;
            if((data.result).length===0){
                let new_state = [];
                return new_state
            }
            else{
                let new_state = data.result
                return new_state
            }
        case FETCH_ITEMS_PENDING:
            return state;

        case FETCH_ITEMS_ERROR:
            return state;
        default:
            return (state = [])
    }

}