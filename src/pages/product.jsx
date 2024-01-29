import { useParams } from "react-router-dom"
import products from "../data"
import ProductPage from "../components/ProductPage"

export default function Product(){
    const {productName} = useParams()
    const getProduct = products.find(product => product.name === productName)
    return(
        <div className='page'>
            <ProductPage name={getProduct['name']} img={getProduct.img} desc={getProduct.desc} price={getProduct.price}/>
        </div>
    )
}