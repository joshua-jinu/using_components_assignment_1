import React from 'react';  
import './bookcard.css';  

const bookcard = ({image, name, genre, author}) => { 
  return (  
    <div className="bookcard">  
      <img src={image} alt={name} className="bookcard-image" />  
      <div className="bookcard-details">  
        <h3 className="bookcard-name">{name}</h3>  
        <p className="bookcard-price">{genre}</p>  
        <p className="bookcard-price">{author}</p>  
      </div>  
    </div>  
  );  
};  

export default bookcard;  
