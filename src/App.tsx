import React, { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0)
  return (
    <div className='wrapper'>
      <div className='food'>{counter <= 4 ? 'Еда' : 'Много еды'}</div>
      <div className="buttons">
        <button onClick={() => {
          if (counter > 0) setCounter(counter - 1)
        }}>{"<"}</button>
        <div className="counter">Количество: {counter}</div>
        <button onClick={() => setCounter(counter + 1)}>{">"}</button>
      </div>
    </div>
   )
}
 
export default App;
