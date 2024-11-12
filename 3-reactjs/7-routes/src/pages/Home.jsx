import { Link, useNavigate } from "react-router-dom";

function Home () {
    const navigate = useNavigate()

    const goToAbout = () => {
        navigate('/about')
    }

    return(
        <div>
            <h1>Home page</h1>
            <Link to="/about">Go to About</Link>

            <button onClick={goToAbout}>Go to About</button>
        </div>
    )
}

export default Home