import React, {useState}from "react";
import './style.css'
const App = ()=>{
const [number, setNumber]= useState(0)
    return <div>
        <h3>Counter App</h3>
        <h4>{number}</h4>
    <button onClick={()=> setNumber(number+1) } className="button">Add</button>
    <button onClick={()=> setNumber(number-1)} className="button">Decrease</button>
    <button onClick={()=> setNumber(0)} className="button">Reset</button>
    </div>
}
export default App;