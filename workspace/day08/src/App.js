import React from 'react';
import Animal from './component/Animal';
import Color from './component/Color';
import Count from './component/Count';

const App = () => {
  return (
    <div>
      <Color/>
      <hr/>
      <Count/>
      <hr/>
      <Animal/>
    </div>
  );
};

export default App;

/*
리덕스를 사용하면 상태값을 컴포넌트에 종속시키지 않고, 
컴포넌트 밖에서 따로 관리 할 수 있다.
*/