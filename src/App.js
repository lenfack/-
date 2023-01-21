import { useState } from 'react';
import './index.scss';

const App = (props) => {
   const {num} = props;

   const [count, setCount] = useState(num);

   const clickPlus = () => {
      setCount(count + 1);
   }
   const clickMinus = () => {
      setCount(count - 1);
   }
   const clickReset = () => {
      setCount(num);
   }

   return (
      <div className="App">
         <div>
            <h2>Счетчик:</h2>
            <h1>{count}</h1>
            <button onClick={clickMinus} className="minus">-</button>
            <button onClick={clickReset} className="reset">0</button>
            <button onClick={clickPlus} className="plus">+</button>
         </div>
      </div>
   );
};

export default App;
