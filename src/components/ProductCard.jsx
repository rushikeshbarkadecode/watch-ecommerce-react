import { Link } from "react-router-dom"

export default function ProductCard(props){
    return(
        <div className="product-card">
            <div className="product-card-img">
                <img src={props.img} alt="" />
            </div>
            <div className="inner-proudct-card">
                <h3><Link to={'/product/'+ props.name}>{props.name}</Link></h3>
                <p>${props.price}</p>
            </div>
        </div>
    )
}