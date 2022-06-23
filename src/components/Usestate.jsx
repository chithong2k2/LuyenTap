import React from 'react';
import {useState} from 'react';
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
        <div>
            <h1>{count}</h1>
            <button onClick={inCrease}>Tăng</button>
            <button onClick={decrease}>Giảm</button>
        </div>
    )
}
export default Hihi;