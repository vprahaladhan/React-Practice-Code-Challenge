import React, { Fragment } from 'react';

const Sushi = ({ sushi, onClick }) => {
  return (
    <div className="sushi">
      <div 
        className="plate" 
        onClick={() => onClick(sushi)}>
        { sushi.eaten ? 
            null : <img src={new URL(sushi.img_url, 'http://localhost:3000')} alt={sushi.name} width="100%" /> 
        }
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  )
}

export default Sushi;