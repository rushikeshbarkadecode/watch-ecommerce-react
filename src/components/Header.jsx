import { useRef, useState } from "react"
import { Link } from "react-router-dom"

export default function Header(){
    let menuVisibility = false
    const ref = useRef()
    const toggleMenu = () => {
        if(menuVisibility == false){
            ref.current.style.display = 'block'
            menuVisibility = true
        } else if(menuVisibility == true){
            ref.current.style.display = 'none'
            menuVisibility = false
        }
    }

    return(
        <header className="header">
            <nav>
                <div className="logo-container">
                    <Link to='/'><h2>PotentWatch</h2></Link>
                </div>
                <div ref={ref} id="menu">
                    <ul className="">
                        <li><Link to='/account'>Account</Link></li>
                        <li><Link to='/cart'>Cart</Link></li>
                        <li><Link to='/orders'>Orders</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/sign-up'>Sign Up</Link></li>
                    </ul>
                </div>
                
                <button onClick={toggleMenu} className="menu-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>    
                </button>
                
            </nav>
        </header>
    )
}