import "./signin.css";

function SignIn() {
  return (
    <div className="Window">
      <div className="Header">
        <h1>Investigadores</h1>
      </div>
      <div className="LogIn">
        <form className="Form">
          <h1>Iniciar Sesión</h1>
          <input
            className="input"
            type="text"
            placeholder="Usuario o Correo"
            autoComplete="off"
            autoCapitalize="off"
          />
          <input
            className="inputs"
            type="password"
            placeholder="Contraseña"
            autoComplete="off"
            autoCapitalize="off"
          />
          <button type="submit">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
