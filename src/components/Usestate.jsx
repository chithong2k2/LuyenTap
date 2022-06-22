import React from 'react';
import {useState} from 'react';
function Hihi()
{ 
    const [count, setCount] = useState(60);
    const inCrease=()=>{
        setInterval(()=>{
        setCount(prev => prev -1)},1000)
    }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={inCrease}>Click me</button>
        </div>
    )
}
export default Hihi;