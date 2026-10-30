import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import "../index.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(
  "/auth/login",
  {
    email: email.trim(),
    password: password.trim(),
  }
);

      const data = response.data;

      // Store JWT and user information
      localStorage.setItem("token", data.token);
      localStorage.setItem("userName", data.name);
      localStorage.setItem("userEmail", data.email);
      localStorage.setItem("userRole", data.role);

      navigate("/dashboard");

    } catch (error) {
      console.error("Login error:", error);

      if (error.response && error.response.status === 401) {
        alert("Invalid email or password");
      } else {
        alert("Unable to connect to the backend");
      }
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">

        <div className="login-logo">
          🚜
        </div>

        <h1>BuildAsset</h1>

        <p className="login-subtitle">
          Construction Equipment Rental & Dispatch
        </p>

        <form onSubmit={handleLogin}>

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-button">
            Login
          </button>

        </form>

        <p className="demo-login">
          Demo: admin@buildasset.com / admin123
        </p>

      </div>
    </div>
  );
}

export default Login;