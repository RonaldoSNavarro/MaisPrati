import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/services')
  }

  return (
    <div className="page-container">
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login