import { useNavigate } from "react-router-dom";
import '../styles/pages.css';

function Services() {
    const navigate = useNavigate();
  
    const goToHome = () => {
      navigate('/');
    };
  
    return (
      <div className="page-container">
        <h1>Serviços</h1>
        <button onClick={goToHome}>Home</button>
      </div>
    );
  }

export default Services