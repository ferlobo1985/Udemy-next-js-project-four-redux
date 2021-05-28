import * as types from '../types';

export const getPosts = () =>  async dispatch =>{
    const request = [
        { title: 'js',body:'awesome'},
        { title: 'next',body:'great'},
    ];

    dispatch({
        type: types.GET_POSTS,
        payload:request
    })
}