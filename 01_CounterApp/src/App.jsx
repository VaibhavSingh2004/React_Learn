import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function addValue(){
    setCount(count+1)
    // one more way to the same is with the help of callback function 
    // setCount((prevCount)=>{
    //   return prevCount + 1
    // })
  }
  function minusValue(){
    setCount(count-1)
  }

  return (
    <>
      <h1>Hi This is Counter App</h1>
      <h3>Current Count : {count}</h3>
      <button onClick={addValue}>Add Value</button>{"  "}
      <button onClick={minusValue}>Minus Value</button>
      <hr />
      <footer>Counter Updated : {count}</footer>
    </>
  )
}

export default App
