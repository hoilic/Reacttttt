import React from 'react';

const Person = ({name,age}) => {
    //props 를 안쓸거면 {} 객체로 감싸줘야한다.
    return (
        <div>
            나의 이름은 {name} 이고, 나이는 {age}살 입니다.
        </div>
    );
};

export default Person;