import { useState } from "react"
import { Link } from "react-router-dom"

export default function Header(){
    const [menuVisibility, setStyle] = useState()

    const toggleMenu = () => {
        const styling = {
            display: "block",
        }

        if (menuVisibility){
            styling.display = 'none'
            setStyle(styling)
        } else {
            setStyle(styling)
        }
        console.log(menuVisibility)
    }

    return(
        <header className="header">
            <nav>
                <div className="logo-container">
                    <Link to='/'><h2>PotentWatch</h2></Link>
                </div>
                <div style={menuVisibility} className="menu">
                    <ul>
                        <li><Link to='/account'>Account</Link></li>
                        <li><Link to='/cart'>Cart</Link></li>
                        <li><Link to='/orders'>Orders</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/sign-up'>Sign Up</Link></li>
                    </ul>
                </div>
                <button onClick={toggleMenu} className="menu-icon">X</button>
            </nav>
        </header>
    )
}