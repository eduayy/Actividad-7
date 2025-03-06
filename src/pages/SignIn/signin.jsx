import "./signin.css";

function SignIn() {
  return (
    <div className="Window">
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
          <button type="button" onClick={() => window.location.href = "/menu"}>
          Iniciar Sesión
          </button>
          <a href="/recover" className="olvido">
            Olvidaste tu contraseña?
          </a>
          <a href="/register" className="Register">
            No tienes una cuenta? Regístrate
          </a>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
