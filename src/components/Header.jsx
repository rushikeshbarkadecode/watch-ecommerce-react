import { useState } from "react"

export default function Header(){
    const [style, setStyle] = useState()

    const toggleMenu = () => {
        const styling = {
            display: "none",
        }

        if (styling.display == 'block'){
            styling.block = 'none'
            setStyle(styling)
        } else{
            setStyle(styling)
        }
    }

    return(
        <header className="header">
            <nav>
                <div className="logo-container">
                    <h2>PotentWatch</h2>
                </div>
                <div style={style} className="menu">
                    <ul>
                        <li>Cart</li>
                        <li>My Account</li>
                        
                    </ul>
                </div>
                <button onClick={toggleMenu} className="menu-icon">X</button>
            </nav>
        </header>
    )
}