import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import { useContext } from 'react'



function Navbar() {

    const { isAuthenticated, logout } = useContext(AuthContext)

    return(
        <nav className='navbar'>
            <Link to="/">Home</Link>
            <Link to="/about">Sobre</Link>
            { isAuthenticated ? (
                <>
                    <Link to="/services">Serviços</Link>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <Link to="/login">Login</Link>
            )}
            
            <Link to="/contact">Contato</Link>
        </nav>
    )
}

export default Navbar