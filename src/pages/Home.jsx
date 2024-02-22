import ProductCard from '../components/ProductCard'
import HeroSection from '../components/HeroSection'
import ProductCollage from '../components/ProductCollage'
import LimitedOffer from '../components/LimitedOffer'
import CategoryBox from "../components/CategoryBox";
import productsData from '../data'

export default function Home(){
    const categoryList = ['Metalic', 'Leather', 'Digital', 'Mechanical'] 
    const products = productsData
    return(
        <>
           <HeroSection></HeroSection>
            <CategoryBox list={[categoryList]}/>
            <div className="product-section">
                {
                    products.map((product) => (
                        <ProductCard name={product.name} price={product.price} img={product.img}></ProductCard>
                    ))
                }
            </div>
            <ProductCollage/>
            
        </>
    )
}