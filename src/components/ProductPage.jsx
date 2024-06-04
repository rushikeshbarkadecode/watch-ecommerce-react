import React from 'react'

export default function ProductPage(props) {
  return (
    <div className="container">
        <div className="image-container row">
          <div className="col-md m-3">
              <img className='img-fluid' src={props.img} alt={props.name} />
          </div>
          <div className="col-md m-3">
              <h1>{props.name}</h1>
              <h4>Price: ${props.price}</h4>
              <div className="cta">
                <button className="add-to-cart">Add to cart</button>
                <button className="buy-now">Buy now</button>
              </div>
              <p>{props.desc}</p>
            </div>
        </div>
        
    </div>
  )
}
