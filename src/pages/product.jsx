import { useParams } from "react-router-dom"

export default function Product(){
    const {productName} = useParams()
    return(
        <div className='page'>
            <div className="product-container">
                <div className="img-section">Img</div>
                <div className="product-info">
                    <h1>{productName}</h1>
                    <h4>Price: $200</h4>
                    <p>This is product description section.</p>
                    <button className="add-to-cart">Add to cart</button>
                    <button className="buy-now">Buy now</button>
                    </div>
            </div>
        </div>
    )
}