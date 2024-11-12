import { Link, useNavigate } from "react-router-dom";
import "../styles/pages.css";

function Home() {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/about");
  };
  const goToContact = () => {
    navigate("/contact");
  };
  const goToServices = () => {
    navigate("/services");
  };

  return (
    
    <div className="page-container">
      <h1>Home</h1>
      <p>Bem-vindo!</p>

      <div>
        <button onClick={goToContact}>Contato</button>
        <button onClick={goToServices}>Serviços</button>
        <button onClick={goToAbout}>Sobre</button>
      </div>
    </div>
  );
}

export default Home;
