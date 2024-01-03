export default function ProductCard(){
    return(
        <div className="product-card">
            <img src={"/static/images/chair.jpg"} alt="" />
            <div className="inner-proudct-card">
                <h3>Product Name</h3>
                <p>Rs.12,000</p>
            </div>
        </div>
    )
}