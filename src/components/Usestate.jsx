import React from 'react';
import {useState} from 'react';
import './usestate.css'
function Hihi()
{ 
    const [count, setCount] = useState(0);
    const inCrease=()=>{
        setCount(prev => prev+1)
    }
    const decrease=()=>{
        setCount(prev => prev-1)
    }
    return(
        <div className="Time">
            <div className="Content">
                <h1>{count}</h1>
            </div>
            <div className="Click">
                <button className="Increase" onClick={inCrease}>Tăng</button>
                <button className="Decrease" onClick={decrease}>Giảm</button>
            </div>
        </div>
    )
}
export default Hihi;