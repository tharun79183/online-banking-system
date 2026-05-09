import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async () => {

    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );

      alert(res.data.message);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem(
      "user",
      JSON.stringify(res.data.user)
      );

      navigate("/dashboard");

    } catch (error) {

      alert(error.response.data.message);

    }

  };

  return (

    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#f3f4f6"
    }}>

      <div style={{
        background: "white",
        padding: "40px",
        borderRadius: "15px",
        width: "350px",
        boxShadow: "0px 0px 20px rgba(0,0,0,0.1)"
      }}>

        <h1 style={{
          textAlign: "center",
          color: "#2563eb",
          marginBottom: "20px"
        }}>
          Online Banking Login
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px"
          }}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px"
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "12px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Login
        </button>

        <p style={{
          marginTop: "15px",
          textAlign: "center"
        }}>
          Don't have an account?

          <Link
            to="/register"
            style={{
              color: "blue",
              marginLeft: "5px"
            }}
          >
            Register
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;