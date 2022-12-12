import React,{useReducer} from 'react';
//초기값
const initialState = 'black'

//함수
const reducer = (state, action) => {
    switch(action.c){
        case 'RED': return 'red'
        case 'GREEN': return 'green'
        case 'BLUE': return 'blue'
        case 'PINK': return 'pink'   
        case 'RESET': return initialState
        dafault: //dafault는 반드시 작성해야 한다.
            return false
    }
}
const Test02 = () => {
    const [color, dispatch ] = useReducer(reducer, initialState)
    return (
        <div>
            <h1 style={{color:color}}>color : {color}</h1>
            <p>
                <button onClick={() => dispatch({c: 'RED'})}>red</button>
                <button onClick={() => dispatch({c: 'GREEN'})}>green</button>
                <button onClick={() => dispatch({c: 'BLUE'})}>blue</button>
                <button onClick={() => dispatch({c: 'PINK'})}>pink</button>
                <button onClick={() => dispatch({c: 'RESET'})}>reset</button>
            </p>
        </div>
    );
};

export default Test02;