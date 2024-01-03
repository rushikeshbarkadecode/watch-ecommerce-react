import ProductCard from './components/ProductCard'
import HeroSection from './components/HeroSection'
import './App.css'

function App() {
  return (
    <>
      <HeroSection></HeroSection>
      <div className="product-section">
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
    </>
  )
}

export default App
