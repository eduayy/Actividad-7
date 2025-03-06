import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => {
      const newFormData = { ...prevData, [name]: value };

      if (name === "email") {
        setIsValidEmail(emailRegex.test(value) || value === "");
      }

      const passwordsMatch =
        newFormData.password === newFormData.confirmPassword ||
        newFormData.confirmPassword === "";

      setIsPasswordMatch(passwordsMatch);

      const isFormValid =
        newFormData.nombre.trim() !== "" &&
        newFormData.email.trim() !== "" &&
        emailRegex.test(newFormData.email) &&
        newFormData.password.trim() !== "" &&
        newFormData.confirmPassword.trim() !== "" &&
        passwordsMatch;

      setIsButtonDisabled(!isFormValid);
      return newFormData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isButtonDisabled) {
      navigate("/signin");
    }
  };

  return (
    <div className="Window">
      <div className="Registro">
        <form className="Form" onSubmit={handleSubmit}>
          <h1>Registro</h1>
          {!isValidEmail && formData.email !== "" && (
            <p className="error-text">Correo inválido</p>
          )}
          <input
            className="input-nombre"
            type="text"
            name="nombre"
            placeholder="Nombre Completo"
            autoComplete="off"
            value={formData.nombre}
            onChange={handleChange}
          />
          <input
            className={`input-email ${isValidEmail ? "" : "error"}`}
            type="email"
            name="email"
            placeholder="Correo Electrónico"
            autoComplete="off"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            className={`input-pass ${isPasswordMatch ? "" : "error"}`}
            type="password"
            name="password"
            placeholder="Contraseña"
            autoComplete="off"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            className={`input-confpass ${isPasswordMatch ? "" : "error"}`}
            type="password"
            name="confirmPassword"
            placeholder="Confirmar Contraseña"
            autoComplete="off"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {!isPasswordMatch && formData.confirmPassword !== "" && (
            <p className="error-text">Las contraseñas no coinciden</p>
          )}
          <button type="submit" disabled={isButtonDisabled}>
            Registrarse
          </button>
          <a href="/signin" className="Register">
            ¿Ya tienes cuenta? Inicia sesión
          </a>
        </form>
      </div>
    </div>
  );
}

export default Register;
