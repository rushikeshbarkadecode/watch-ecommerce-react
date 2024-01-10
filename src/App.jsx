import ProductCard from './components/ProductCard'
import HeroSection from './components/HeroSection'
import Header from './components/Header'
import Footer from './components/footer'
import './App.css'


function App() {

  return (
    <>
      <Header></Header>
      <HeroSection></HeroSection>
      <div className="product-section">
        <ProductCard title='Mill Chair' price='400'></ProductCard>
        <ProductCard title='Rolex' price='40000'></ProductCard>
        <ProductCard title='Titan' price='40000'></ProductCard>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
