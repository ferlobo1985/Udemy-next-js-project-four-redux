import {
    GET_POSTS
} from '../types';

let INITIAL_STATE = {
    someValue:true
}

export default function usersReducers(state=INITIAL_STATE,action) {
    switch(action.type){
        case GET_POSTS:
            return { ...state, posts: action.payload }
        default:
            return state;
    }
}