import React from 'react';
import Dog from './component/Dog';
import Test01 from './component/Test01';
import Test02 from './component/Test02';
import Test03 from './component/Test03';
import Test04 from './component/Test04';
import Test05 from './component/Test05';

const App = () => { //function App (){}
  return(
    <div>
      <Dog/>
      <hr/>
      <Test01></Test01>
      <hr/>
      <Test02/>
      <hr/>
      <Test03/> 
      <Test04/>
     
      <Test05/>
    </div>
  );
};

export default App;