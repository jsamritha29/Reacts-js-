import React , {useState} from "react";

function App() {
  const[Color,setColor]=useState("white")
 return (
  <div>
    <h1>Color-Picker</h1>
    <button onClick={()=>setColor("red")}>Red</button>
    <button onClick={()=>setColor("green")}>Green</button>
    <button onClick={()=>setColor("blue")}>Blue</button>
    <div className='bgchange' style={{backgroundColor:Color}}></div>
  </div>
 )
}

export default App
