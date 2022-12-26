import React from 'react';

const CatItem = ({b}) => {
    const {id, img, title} = b

    return (
        <li>
           <a href='#' >
            {id}
                <div><img src={img}/></div>
                <h3>
                    {title}
                </h3>
            </a> 
        </li>
    );
};

export default CatItem;