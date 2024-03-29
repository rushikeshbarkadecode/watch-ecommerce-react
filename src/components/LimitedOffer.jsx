import ProductCard from "./ProductCard";

export default function LimitedOffer(){
    return(
        <div className="limited-offer">
        <div className="col1">
            <ProductCard title="Rolex Submariner" price="25000" img='/static/images/rolex-submariner.webp'></ProductCard>
        </div>
        <div className="col2">
            <h3>Limited Period Offer</h3>
            <p>Time left: 3 hrs 4 minutes</p>
            <div><button>Buy Now</button></div>
        </div>
        </div>
    )
}