import React,{useReducer} from 'react';
//초기값
const initialState ={
    color:'black'
} 
const reducer = (state, action) => {
    switch(action.type){
        case 'CHANGE_COLOR': return{
            color:action.text
        }
        case 'RESET' : return initialState
        dafault:return action
    }
}
const Test03 = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h1 style={{color:state.color}}>color:{state.color}</h1>
            <p>
                <button onClick={() => dispatch({type: 'CHANGE_COLOR', text:'red'})}>red</button>
                <button onClick={() => dispatch({type: 'CHANGE_COLOR', text:'green'})}>green</button>
                <button onClick={() => dispatch({type: 'CHANGE_COLOR', text:'blue'})}>blue</button>
                <button onClick={() => dispatch({type: 'CHANGE_COLOR', text:'pink'})}>pink</button>
                <button onClick={() => dispatch({type: 'RESET'})}>reset</button>
            </p>
        </div>
    );
};

export default Test03;