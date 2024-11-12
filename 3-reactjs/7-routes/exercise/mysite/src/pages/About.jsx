import { useNavigate } from "react-router-dom";
import '../styles/pages.css'

function About() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div className="page-container">
      <h1>Sobre</h1>
      <button onClick={goToHome}>Home</button>
      <br/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, debitis.</p>
    </div>
  );
}

export default About;
