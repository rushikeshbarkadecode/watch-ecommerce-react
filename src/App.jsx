import ProductCard from './components/ProductCard'
import HeroSection from './components/HeroSection'
import Header from './components/Header'
import './App.css'

function App() {
  return (
    <>
      <Header></Header>
      <HeroSection></HeroSection>
      <div className="product-section">
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
    </>
  )
}

export default App
