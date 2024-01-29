import React from 'react'

export default function ProductPage(props) {
  return (
    <div className="product-container">
        <div className="img-section">
            <img src={props.img} alt={props.name} />
        </div>
        <div className="product-info">
            <h1>{props.name}</h1>
            <h4>Price: ${props.price}</h4>
            <p>{props.desc}</p>
            <button className="add-to-cart">Add to cart</button>
            <button className="buy-now">Buy now</button>
            </div>
    </div>
  )
}
