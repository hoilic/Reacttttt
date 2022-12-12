import React,{useReducer, useEffect } from 'react';
import axios from 'axios';

//초기값
const initialState ={
    data:{},
    error:null,
    loading:true
} 
const reducer = (state, action) => {
    switch(action.type){
        case 'SUCCESS': return{
                            data: action.payload,
                            error:null,
                            loading: false    
                        }
        case 'ERROR': return{
                            data: {},
                            error:'에러...',
                            loading: true  
                        }
        dafault:return state
    }
}
const Test04 = () => {
    const [state, dispatch] =useReducer(reducer, initialState)

    useEffect(()=>{
        const url = 'https://jsonplaceholder.typicode.com/posts/3'
        axios.get(url)
            .then(res =>{
                dispatch({type:'SUCCESS', payload: res.data})
            }) //성공했을때

            .catch(error => {
                dispatch({type:'ERROR'})
            }) //실패했을때
    },[])
    
    return (
        <div>
            <h2>
                {
                    state.data && state.loading ? '로딩 중' : state.data.title
                }
            </h2>
            <p>
                {
                    state.error ? state.error : null
                }
            </p>
        </div>
    );
};

export default Test04;