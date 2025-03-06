import React, { useState } from "react";
import Menu from "../Menu/menu.jsx";
import "./signin.css";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (!e.target.value.includes("@") || e.target.value.length < 4) {
      setError("Correo electrónico no válido.");
    } else {
      setError("");
    }
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    if (!email.includes("@") || email.length < 4) {
      setError("Correo electrónico no válido.");
      return;
    }

    console.log("Inicio de sesión exitoso");
    setError("");
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return <Menu />;
  }

  return (
    <div className="Window">
      <div className="LogIn">
        <form className="Form" onSubmit={handleSubmit}>
          <h1>Iniciar Sesión</h1>
          {error && <p className="error-message">{error}</p>}
          <input
            className="input"
            type="text"
            placeholder="Usuario o Correo"
            value={email}
            onChange={handleEmail}
          />
          <input
            className="inputs"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={handlePassword}
          />
          <button type="submit">Iniciar Sesión</button>
          <a href="/recover" className="olvido">
            ¿Olvidaste tu contraseña?
          </a>
          <a href="/register" className="Register">
            ¿No tienes una cuenta? Regístrate
          </a>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
