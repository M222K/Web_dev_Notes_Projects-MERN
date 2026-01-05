import { useCallback, useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  //set the states based on which things will change
  const [length,setLength]=useState(8);
  const [numberAllowed,setnumberAllowed]=useState(false);
  const [charAllowed, setcharAllowed]=useState(false);
  const [password,setPassword]=useState("");

  const passwordRef=useRef(null);

  const generatePassword=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+="0123456789";
    if(charAllowed) str+="!@#$%^&*-_+=[]{}|;:,.<>?";
    //conditionlly append the number and char when tick marked
    //run a loop to create password of given length and select random char each time
    for(let i=0;i<length;i++){
      pass+=str[Math.floor(Math.random()*str.length)];
    }
    
    setPassword(pass);

  },[length,numberAllowed,charAllowed]);

  //runs the hook as soon as something is changed intentionally
  useEffect(()=>{
    generatePassword();
  },[length,numberAllowed,charAllowed]);

  const  copyPassword=()=>{
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
    //grab the refrence using hook and select it
  };

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />
        <button 
        onClick={copyPassword}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={20}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setLength(e.target.value)}}
        />
        <label htmlFor="length">Length:{length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        defaultChecked={numberAllowed}
        onChange={()=>{
          setnumberAllowed((prev)=>{!prev}); //used so that react act more faaster with callback
        }}
        name=''
        id=''
        />
        <label htmlFor="number">Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        defaultChecked={charAllowed}
        onChange={()=>{
          setcharAllowed((prev)=>{!prev}); //used so that react act more faaster with callback
        }}
        name=''
        id=''
        />
        <label htmlFor="character">Characters</label>
      </div>
      </div>
    </div>
    </>
  )
}

export default App
