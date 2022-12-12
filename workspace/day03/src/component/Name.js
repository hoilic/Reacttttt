import React from 'react';

const Name = ({name, onName}) => {
    return (
        <div>
            이름 입력 : <input type='text' value={name} onChange={onName}/>
        </div>
    );
};

export default Name;