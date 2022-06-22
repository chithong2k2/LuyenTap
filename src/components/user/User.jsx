import React from 'react'
import { useState } from 'react'
import './user.css'
function User()
{
    const [user,setUser]=useState('')
    const [password,setPassword]=useState('')
    const [object,setObject]=useState([{}])
    const [check,setCheck]=useState(false)
    const InputUser=(e)=>{
        setUser(e.target.value)
    }
    const InputPassword=(e)=>{
        setPassword(e.target.value)
    }
    const Sumit=()=>{
       setObject(prev=>[...prev,{user:user,password:password}])
       setUser('')
        setPassword('')
       setCheck(false)
    }
    const Infor=(props =>{
        return(
            <div className="ShowInf">
                <p>username: {props.user}</p>
                <p>password: {props.password}</p>
            </div>
        )
    })
    const Show=({object})=>{
        return(
            <div>
                {object.map((item,index)=>{
                    return(
                        <Infor key={index} user={item.user} password={item.password}/>
                    )
                })}
            </div>
        )
    }
    return(
        <div className="Show">
            <div className="Info">
                <h1>Login</h1>
                <div className="form-group">
                    <input value={user} type="text" onChange={InputUser} placeholder="Username"/>
                </div>
                <div className="form-group">
                    <input value={password} type="password" onChange={InputPassword} placeholder="Password"/>
                </div>
                <button onClick={Sumit}>Submit</button>
                <button onClick={()=>setCheck(true)}>Show</button>
                {check &&<Show object={object}/>}
            </div>
        </div>
    )

}
export default User;