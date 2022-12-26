import React, { useState } from 'react';
import dataList from './CatData';
import '../css/style.css';
import '../css/reset.css';
import CatList from './CatList';

const Cat = () => {
    //초기값 설정
    const[data, setData]  = useState(dataList)
    
    return (
        <>
            <section className='business'>
                <div className='inner'>
                    <h2>고양이</h2>
                    <p>고양이들</p>
                    <CatList data={data}/>
                </div>
            </section>
        </>
     
    );
};

export default Cat;


