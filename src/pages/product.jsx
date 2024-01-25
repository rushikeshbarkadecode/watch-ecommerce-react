import { useParams } from "react-router-dom"

export default function Product(){
    const {productName} = useParams()
    return(
        <div className='page'>
            <h2>Product Name: {productName}</h2>
        </div>
    )
}