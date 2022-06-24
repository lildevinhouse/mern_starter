import axios from 'axios';
import { FETCH_USER, FETCH_DATA } from './types';

export const fetchUser = () => async dispatch => {
    try{
        const res = await axios.get('/api/current_user')
        dispatch({ type: FETCH_USER, payload: res.data })
    }
    catch(err){
    //Do something with HTTP errors
     console.log(err)
    }
};

export const fetchData = () => async dispatch => {
    try{
        const res = await axios.get('/api/randomdata')
        dispatch({ type: FETCH_DATA, payload: res.data })
    }
    catch(err){
    //Do something with HTTP errors
     console.log(err)
    }
};
