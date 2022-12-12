import React, { useState } from 'react';
import Test07Input from './Test07Input';
import '../css/Test07.css'
import Test07Print from './Test07Print';
import Test07Output from './Test07Output';


const Test07Main = () => {
    const [count, setCount] = useState(1)

    const [form, setForm] = useState({
        name:'',
        age:'',
        addr:'',
        phone:''
    })

    const onInput= (e) =>{
        const{name, value} = e.target
 
        setForm({
             ...form, //먼저 객체를 복사하고, [name]:value만 수정한다.(복사하지 않으면 전에 있던 값이 초기화 된다.)
             [name] : value
        })
     }
     const onNext=()=>{
        setCount(count+1)
    }
    const onPrev=()=>{
        setCount(count-1)

    }


    return (
        <div className='wrap'>
            {
              count === 1 &&  <Test07Input form={form} onInput={onInput} onNext={onNext}/>
            }
            {
              //count === 2 &&  <Test07Input form={form} onPrev={onPrev} onNext={onNext} />
                count === 2 &&  <Test07Print {...form} onPrev={onPrev} onNext={onNext} />
            }
            {
              count === 3 &&  <Test07Output name={form.name}/>
            }
        </div>
    );
};

export default Test07Main;