import { useNavigate } from "react-router-dom";
import "../styles/pages.css";

function Services() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };
  const goToContatc = () => {
    navigate("/");
  };

  return (
    <div className="page-container">
      <h1>Serviços</h1>
      <ul>
        <li>Desenvolvimento de sofware</li>
        <li>Suporte</li>
      </ul>
      <button onClick={goToHome}>Home</button>
      <button onClick={goToContatc}>Contato</button>
    </div>
  );
}

export default Services;
