import { useState } from "react";
import './login.scss';

export default function Login() {
    const [msgStatus, setMsgStatus] = useState("");
    const [usuario, setUsuario] = useState({
        username: "",
        senha: ""
    });

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

                    const token = Math.random().toString(32).substring(2) + Math.random().toString(32).substring(2);
                    sessionStorage.setItem("token-user", token);

                    setTimeout(() => {
                        // Utilizando o hook useHistory do React Router para redirecionar
                        window.location = "/predict";
                    }, 5000);
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
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="main">
            <div className="content">
                <h2>Seja bem vindo.</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="login">Login:</label>
                        <input
                            type="text"
                            id="login"
                            value={usuario.username}
                            onChange={handleChange}
                            name="username"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Senha:</label>
                        <input
                            type="password"
                            id="password"
                            value={usuario.senha}
                            onChange={handleChange}
                            name="senha"
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit">Entrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
