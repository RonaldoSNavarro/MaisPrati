import { useNavigate } from "react-router-dom";
import '../styles/pages.css'

function Home () {
    const navigate = useNavigate()

    const goToAbout = () => {
        navigate('/about')
    }
    const goToContact = () => {
        navigate('/contact')
    }
    const goToServices = () => {
        navigate('/services')
    }



    return(
        <div className="page-container">
            <h1>Home</h1>

            <button onClick={goToContact}>Contato</button>
            <button onClick={goToServices}>Serviços</button>
            <button onClick={goToAbout}>Sobre</button>
            
        </div>
    )
}

export default Home