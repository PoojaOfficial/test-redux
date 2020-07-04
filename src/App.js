import React from 'react';
import { useSelector,useDispatch } from 'react-redux';


const App= () => {

const counter = useSelector(state => state.myCounter.counter);
  
const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        {counter}
        <button onClick = {()=>dispatch({type: 'INCREMENT_COUNT'})}>Increment</button>
        <button onClick={()=>dispatch({ type: 'DECREMENT_COUNT'})}>Decrement</button>
      </header>
    </div>
  );
}

export default App;
