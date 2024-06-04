import { Link } from "react-router-dom"
import generateUrl from "../utils/url"

export default function ProductCard(props){
    let url = generateUrl(props.name)
    console.log(url)
    return(
        <Link to={'/product/' + props.name}>
            <div className="product-container card m-2">
                <div className="product-card-img">
                    <img src={props.img} alt="" />
                </div>
                <div className="inner-proudct-card">
                    <h3 className="card-title">{props.name}</h3>
                    <p >${props.price}</p>
                </div>
            </div>
        </Link>
    )
    
}