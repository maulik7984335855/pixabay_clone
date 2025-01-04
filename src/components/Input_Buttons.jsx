import React, { useState } from 'react'
import { useContext } from 'react';
import PixaBayContext from '../context/PixaBayContext';

const Input_Buttons = () => {
    const {setSearch} = useContext(PixaBayContext)
   
    
  return (
    <>
        <div className='content' style={{textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",position:"fixed",top:"0",left:"0",right:"0"}}>
        <div style={{padding:"10px",display:"flex",gap:"20px"}}>
            <button onClick={()=>setSearch("nature")} className='p-2'>Nature</button>
            <button onClick={()=>setSearch("science")} className='p-2'>Science</button>
            <button onClick={()=>setSearch("computer")} className='p-2'>Computer</button>
            <button onClick={()=>setSearch("sports")} className='p-2'>Sports</button>
            <button onClick={()=>setSearch("business")} className='p-2'>Business</button>
        </div>
        <div>
            <input className='py-2 px-1 inputBox' style={{width:"250px"}} type="text" placeholder='Search' onChange={(e)=>setSearch(e.target.value)}  />
        </div>
        </div>
    </>
  )
}

export default Input_Buttons