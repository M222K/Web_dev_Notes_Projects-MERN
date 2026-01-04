import { useState } from 'react'
import './App.css'

function App() {

  const [color,setcolor]=useState("olive");

  function changecolor(color){
    setcolor(color);
  }

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black bg-red-600' onClick={()=>{changecolor("red")}}>Red</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg bg-blue-600 text-black'onClick={()=>changecolor("blue")}>blue</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black'onClick={()=>changecolor("olive")}>default</button>

        </div>
      </div>
    </div>

  )
}

export default App
