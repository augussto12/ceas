import "./Header.css"
import { Link } from "react-router-dom"

function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <h1 className="logo">SocioEducativo CEAS</h1>
                <nav>
                    <ul className="nav-list">
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/news">Noticias</Link></li>
                        <li><Link to="/aboutus">Sobre Nosotros</Link></li>
                        <li><Link to="/">Contacto</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
