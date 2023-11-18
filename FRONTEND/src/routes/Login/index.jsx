// ...imports
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.scss';

export default function Login() {
  const [msgStatus, setMsgStatus] = useState("");
  const [usuario, setUsuario] = useState({
    username: "",
    senha: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/usuarios");
      if (response.ok) {
        const data = await response.json();
        const user = data.find((u) => u.username === usuario.username && u.senha === usuario.senha);

        if (user) {
          setMsgStatus("Login realizado com sucesso!");
          sessionStorage.setItem("token-user", user.username);
          navigate("/predict");
        } else {
          setMsgStatus("Senha ou usuário inválidos!!");
          setTimeout(() => {
            setMsgStatus("");
            setUsuario({
              username: "",
              senha: "",
            });
          }, 5000);
        }
      } else {
        setMsgStatus("Erro ao obter usuários. Tente novamente mais tarde.");
      }
    } catch (error) {
      console.error(error);
      setMsgStatus("Ocorreu um erro. Tente novamente mais tarde.");
    }
  };

  return (
    <div className="main">
      <div className="content">
        <h2>Seja bem-vindo.</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="login">Login:</label>
            <input
              placeholder="Ex: usuario1"
              type="text"
              id="login"
              value={usuario.username}
              onChange={handleChange}
              name="username"
              aria-label="Username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha:</label>
            <input
              placeholder="Ex: senha123"
              type="password"
              id="password"
              value={usuario.senha}
              onChange={handleChange}
              name="senha"
              aria-label="Password"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="login-button">Entrar</button>
          </div>
        </form>
        {msgStatus && <p className="status-message">{msgStatus}</p>}
      </div>
    </div>
  );
}
