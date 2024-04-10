
import { useState } from 'react';
import './App.css'

function App() {

  let [counter , setcounter] = useState(15); // using the usestate hook to propage the changes

  const addvalue = ()=>{
    if (counter === 20 ) {
      return;
    }
    setcounter(counter+1);
  }
  const removevalue = ()=>{
    if (counter == 0) {
      return;
    }
    setcounter(counter-1);

  }
  return (
    <>
      <h1>chai and react</h1>
      <h2>counter value : {counter} </h2>
      <button onClick={addvalue} >Add Value {counter}</button>
      <br />
      <button onClick={removevalue}>Remove value {counter}</button>
    </>
  )
}

export default App
