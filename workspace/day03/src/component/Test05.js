import React, { useState } from 'react';
import Name from './Name';
import Fruit from './Fruit';
import Output from './Output';


const Test05 = () => {
    const [name, setName] = useState('')
    const [fruit, setFruit] = useState('')
    const [output, setOutput] = useState('')

    const onName= (e) =>{
        const {value} = e.target
        setName(value)
    }

    const onFruit= (e) =>{
        const {value} = e.target
        setFruit(value)
    }
    const onOutput= (e) =>{
        const {value} = e.target
        setOutput(value)
    }

    return (
        <div>
            <Name name={name} onName={onName}/>
            <br/>
            <Fruit fruit={fruit} onFruit={onFruit}/>
            <br/>
            <Output name={name} fruit={fruit}/>
        </div>
    );
};

export default Test05;