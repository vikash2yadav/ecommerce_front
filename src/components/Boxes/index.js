import React from 'react'
import './boxes.css'
const Box = () => {
  return (
    <>
     <div className="productCart" to={""}>
        <img src={'https://m.media-amazon.com/images/I/61ryKP9ABsL._SX3000_.jpg'} alt="" height="300" width="500" />
        {/* <p>{product.id}</p> */}
        {/* <p>{product.name}</p> */}
     
        <div>
          {/* <ReactStars {...option} /> */}
          <span>10 Ratings</span>
        </div>
        {/* <span>&#8377; {product.price}</span> */}
      </div>
    </>
  )
}

export default Box