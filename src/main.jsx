import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './responsive.css'
import Header from './components/Header.jsx'
import Footer from './components/footer.jsx'
import Cart from './pages/cart.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
        <Header/>
        <App />
        <Footer/>
      </BrowserRouter>
  </React.StrictMode>,
)
