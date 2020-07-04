import React from 'react';
import logo from './logo.svg';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';


const App= () => {

  const  value = useSelector(state => {console.log(state); return state.file;})
  const dispatch = useDispatch();

console.log(value)
  return (
    <div className="App">
      <header className="App-header">
        {value}
        <button onClick = {dispatch({type: 'increment', payload: 'Incremented'})}>Increment</button>
        <button onClick={dispatch({ type: 'decrement', payload: 'Decremented'})}>Decrement</button>
      </header>
    </div>
  );
}

export default App;
