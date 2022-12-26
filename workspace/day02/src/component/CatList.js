import React from 'react';
import CatItem from './CatItem';

const CatList = ({data}) => {
    return (
        <ul className='list2'>
            {
                data.map(a => <CatItem key={a} b={a}/>)
            }
        </ul>
    );
};

export default CatList;