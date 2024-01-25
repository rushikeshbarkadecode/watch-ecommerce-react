import './App.css'
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import Cart from './pages/cart';
import Product from './pages/product';
import Orders from './pages/orders'
import Login from './pages/login'
import SignUp from './pages/signUp'
import Contact from './pages/contact'
import Category from './pages/category'
import Account from './pages/account';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/account' element={<Account />}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path='/orders' element={<Orders/>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/sign-up' element={<SignUp />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/category/:categoryName' element={<Category />}></Route>
        <Route path='/product/:productName' element={<Product />}></Route>
      </Routes>
    </>
  )
}

export default App
