
import React, {useState} from 'react'
function Count() {
  const [color,setColor]=useState(0)
  function inc(){
setColor(color+1)
  }
 
  function dec(){
    if(color>0) setColor(color-1)
  }
  return (
    <div>
       
      <button onClick={inc}>+</button>
      <span>{color}</span>
      <button onClick={dec}>-</button>
 
      
    </div>
  )
}

export default Count
