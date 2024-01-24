import './App.css'
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import Cart from './pages/cart';
import Product from './pages/product';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path='/product/:productName' element={<Product />}></Route>
      </Routes>
    </>
  )
}

export default App
