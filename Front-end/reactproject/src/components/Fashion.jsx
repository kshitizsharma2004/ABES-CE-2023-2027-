import React from 'react';
import './Fashion.css';

function Fashion({ image, title, price }) {
  return (
    <div id="card">
      <img src={image} alt={title} height={100} width={100} />
      <h4>Title: {title}</h4>
      <h4>Price: {price}</h4>
    </div>
  );
}

export default Fashion;
