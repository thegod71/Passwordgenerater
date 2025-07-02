import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[counter,setCounter] =useState(15)


 // let counter=12
  const addvalue=()=>{
  //  counter=counter+1;
    setCounter(counter+1)
     console.log(counter )
  }
  
   const subt=()=>{
        if(counter<=0)setCounter(0)
      else  setCounter(counter-1)
        console.log(counter )
      }
    
  return (
    <>
     <h1> Counter Button </h1>
     <h2> Counter val : {counter}</h2>
     <button onClick={addvalue}>Add Value</button>
     <br>
     </br>
     <button onClick={subt}>Subtract  Value</button>

    </>
  )
}

export default App
