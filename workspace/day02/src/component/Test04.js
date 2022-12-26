import React, { useState } from 'react';

const Test04 = () => {
    const[visible, setVisible] = useState(true)

    const onShow = () => {
        setVisible(true)
    };
    const onHide = () => {
        setVisible(false)
    }
    const onToggle = () => {
        setVisible(!visible)
        //visible 의 기본값이 true 라서 참 이므로 숨기기 버튼 이 표기된다. 
        //그리고 toggle 버튼을 눌렀을때 !true 이닌까 false 로 실행!
    }

    return (
        <div>
            <button onClick={onShow}>보이기</button>
            <button onClick={onHide}>숨기기</button>
            <button onClick={onToggle}>{visible? '숨기기':'보이기'}</button>
            
            {
                //visible ? <div style={{width: 300, height:300, margin: 20, background: 'hotpink'}}></div> : null
                visible && <div style={{width: 300, height:300, margin: 20, background: 'hotpink'}}></div> 
            }
          
        </div>
    );
};

export default Test04;