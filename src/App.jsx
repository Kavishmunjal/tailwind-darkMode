import { useState } from 'react'
import './App.css'


function App() {

  return (
         <div className='bg-white dark:bg-black h-screen' >
        <button className='text-black dark:text-white' onClick={ ()=>{ document.querySelector("html").classList.toggle("dark")  }}>darkmode</button>
    </div>
  )
}

export default App
