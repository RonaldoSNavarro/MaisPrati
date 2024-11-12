import { Link } from 'react-router-dom'

function Navbar() {
    return(
        <nav className='navbar'>
            <Link to="/">Home</Link>
            <Link to="/about">Sobre</Link>
            <Link to="/services">Serviços</Link>
            <Link to="/contact">Contato</Link>
        </nav>
    )
}

export default Navbar