import React, { useState } from 'react';

const Test02 = () => {
    const [check, isCheck] = useState(false)

    const onCheck = (event) => {
        const {checked} = event.target
        isCheck(checked)
    }

    return (
        <div style={{color: check ?'blue' :'red', margin:30, fontSize:25}}>
            <input type="checkbox" checked={check} onChange={onCheck}/> Have a nice day!!
        </div>
    );
};

export default Test02;