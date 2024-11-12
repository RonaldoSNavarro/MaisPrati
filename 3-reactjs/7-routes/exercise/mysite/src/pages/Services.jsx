import { useNavigate } from "react-router-dom";
import "../styles/pages.css";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

function Services() {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext)

  const goToHome = () => {
    navigate("/");
  };
  const goToContatc = () => {
    navigate("/contact");
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
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Services;
