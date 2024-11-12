import { useNavigate } from "react-router-dom";
import '../styles/pages.css'

function Contact() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="page-container">
      <h1>Contato</h1>
      <button onClick={goToHome}>Home</button>
      <ul>
        <li>
          <a href="https://linkedin.com/in/ronaldonavarro" target="blanc">LinkedIn</a>
        </li>
        <li>Lorem ipsum dolor sit amet.</li>
      </ul>
    </div>
  );
}

export default Contact;
