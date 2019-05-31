import axios from 'axios';
export const FETCH_ITEMS_ERROR = "FETCH_ITEMS_ERROR";
export const FETCH_ITEMS_PENDING = "FETCH_ITEMS_PENDING";
export const FETCH_ITEMS_SUCCESS = "FETCH_ITEMS_SUCCESS";

export default function getItems(key){
    var request = axios.get(`/search?key_txt=${key}`)

    return dispatch=>{
        dispatch({type: FETCH_ITEMS_PENDING})
        request.then(response=>{
            dispatch({ type: FETCH_ITEMS_SUCCESS, payload: response.data });
        })
        request.catch(err=>{
            alert("Please refresh the browser and try again!!");
            dispatch({ type: FETCH_ITEMS_ERROR });
        })
    } 
}