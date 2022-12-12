import React, { useRef, useState } from 'react';

const Test10 = () => {
    const seq = useRef(1)
    const nameRef=useRef()

    const [data, setData] = useState([])
    const [form, setForm] = useState({
        name:'',
        age:''
    })
    const {name, age} = form

    const onInput = (e) => {
        const{name, value} = e.target
 
        setForm({
             ...form, //먼저 객체를 복사하고, [name]:value만 수정한다.(복사하지 않으면 전에 있던 값이 초기화 된다.)
             [name] : value
        })
    }
    const onAdd = (e) => {
        e.preventDefault(); //브라우저 고유의 동작을 중단시켜주는 역할을 한다
        if(!name || !age) return

        setData([
            ...data,
            {
                seq:seq.current++,
                name, //Key 와 Value가 똑같으면 1번만 써도 된다.
                age
            }
        ])
        //초기화
        setForm({
            name:'',
            age:''
        })
        nameRef.current.focus()

    }
    return (
        <div>
            <form onSubmit={onAdd}>
                이름 : <input type='text' name='name' value={name} onChange={onInput} ref={nameRef}/>
                <br/>
                나이 : <input type='text' name='age' value={age} onChange={onInput}/>
                <br/>
                <button type='submit'>추가</button>
            </form>
            <hr/>
            <ul>
                {
                    data.map(item => <li key={item.seq}>
                        {item.seq}/{item.name}/{item.age}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Test10;