import React from 'react'
import'./card.css'
function Card(props) {
  return (
    <div id="div">
        <img src="https://images5.alphacoders.com/357/thumb-1920-357914.jpg" alt="" height={100} width={100} />
        
      <h1>{props.name}</h1>
      <h3>{props.ed}</h3>
    </div>
  )
}

export default Card
