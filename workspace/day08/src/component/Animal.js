import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cat, chicken, dog, tiger } from '../store/modules/animal';

const Animal = () => {
    const name = useSelector(state => state.animalReducer.name)
    const crying = useSelector(state => state.animalReducer.crying)
    const dispatch = useDispatch()
    return (
        <div>
            <h1 >동물의 울음소리</h1>
            <h2>{name} 는 "{crying}"</h2>
            <p>
                <button onClick={() => dispatch(tiger())}>호랑이</button>
                <button onClick={() => dispatch(dog())}>강아지</button>
                <button onClick={() => dispatch(cat())}>고양이</button>
                <button onClick={() => dispatch(chicken())}>병아리</button>
            </p>
        </div>
    );
};

export default Animal;