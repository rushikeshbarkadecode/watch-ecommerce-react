import ProductCard from './components/ProductCard'
import HeroSection from './components/HeroSection'
import ProductCollage from './components/ProductCollage'
import LimitedOffer from './components/LimitedOffer'
import Product from './pages/product'
import './App.css'
import CategoryBox from "./components/CategoryBox";

function App() {

  const categoryList = ['Metalic', 'Leather', 'Digital', 'Mechanical'] 
  return (
    <>
      <HeroSection></HeroSection>
      <CategoryBox list={[categoryList]}/>
      <div className="product-section">
        <ProductCard title='Mill Chair' price='400'></ProductCard>
        <ProductCard title='Rolex' price='40000'></ProductCard>
        <ProductCard title='Titan' price='40000'></ProductCard>
        <ProductCard title='Titan' price='40000'></ProductCard>
      </div>
      <ProductCollage/>
      <LimitedOffer></LimitedOffer>
      
    </>
  )
}

export default App
