import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black")


  const toggle=()=>{
    setColor(color === "black" ? "green" : "black") 
  }

  return (
    
    <div className='App'>
<button onClick={toggle}>
Click Me
</button>
<h1 style={{color:color}}>Hello World!!</h1>
    </div>
  )
}

export default App
