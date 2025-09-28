import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(10)
  // let counter = 10;

  const addValue = ()=>{
    if(counter < 20){
    counter = counter+1
    setCounter(counter)
    console.log("Counter Value: ", counter)
    }
    else{
      console.log("20 is the limit for the counter")
    }
    
  }
  const removeValue = () =>{
    if(counter > 0){
        setCounter(counter-1)
        console.log("Counter Value: ", counter)
    }
    else{
      console.log("Value can't be less than 0")
    }
    
  }
  return (
    <>
      <h1>Chai aur code with Darshan</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove value {counter}</button>
      <p>Footer {counter}</p>
    </>
  )
}

export default App
