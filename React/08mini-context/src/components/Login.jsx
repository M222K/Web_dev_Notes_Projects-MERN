import React, { useState,useContext } from 'react'
import UserContext from '../context/UserContext';

function Login() {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');


    //use the hook given to acees the data given to usercontext
    const{setUser}=useContext(UserContext)

    const handleSubmit=(e)=>{
        //handle submit
        e.preventDefault()
        setUser({username,password}) //set user adds the object containing the user and password to the context store
        }


  return (
    <div>
      <h2>Login</h2>
      <input
      value={username}
      onChange={(e)=>setUsername(e.target.value)}
      placeholder='Username'
      type="text" />
      {" "}
      <input 
      type="password"
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      placeholder='Password' />
      <button onClick={handleSubmit}>
        Submit
      </button>
    </div>
  )
}

export default Login
