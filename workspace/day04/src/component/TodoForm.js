import React, { useRef, useState } from 'react';
import styles from '../css/TodoForm.module.css';

const TodoForm = ({onAdd}) => {
    const [text, setText] = useState('');

    const onInput = (e) => {
        const {value} = e.target
        setText(value);
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(!text) return;
        onAdd(text);
        setText('');

        textRef.current.focus();
    }

    const textRef = useRef();

    return (
        <form className={styles.TodoForm}>
            <input type='text' value={text} onChange={onInput} ref={textRef} placeholder='해야 할 일을입력하시오'/>
            <button type='submit' onClick={onSubmit}>추가 </button>
        </form>
    );
};

export default TodoForm;