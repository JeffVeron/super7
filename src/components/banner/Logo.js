import React from 'react'
import "./logo.css";

function Logo (){


    var image1 = require("./logo.png");
    return(

       <div className='logo'>
      <img
        
         alt='logo Image'
        src={image1}
        style={{
          margin: "auto",
          width: "50px",
          height: "50px",
           
        }}
       
      />
       
       </div>
    )
}

export default Logo