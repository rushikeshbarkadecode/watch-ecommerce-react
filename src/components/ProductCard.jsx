import { Link } from "react-router-dom"

export default function ProductCard(props){
    return(
        <div className="product-card">
            <img src={"/static/images/chair.jpg"} alt="" />
            <div className="inner-proudct-card">
                <h3><Link to={'/product/'+ props.title}>{props.title}</Link></h3>
                <p>${props.price}</p>
            </div>
        </div>
    )
}