import React,{useState} from 'react'

function InceremtApp() {

    const [num,setNum] = useState(1);

    const inc = ()=>{
        setNum(num + 1);
    }

    const dec = ()=>{
        setNum(num - 1);
    }

  return (
    <>
    <h1>{num}</h1>
    <span><button onClick={inc}>Incremet </button></span>
    <span><button onClick={dec}> Decrement</button></span>
    
    </>
    
  )
}

export default InceremtApp