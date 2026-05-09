import { Link } from "react-router-dom";

function Register() {
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
          color: "#16a34a",
          marginBottom: "20px"
        }}>
          Create Account
        </h1>

        <input
          type="text"
          placeholder="Enter Name"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px"
          }}
        />

        <input
          type="email"
          placeholder="Enter Email"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px"
          }}
        />

        <input
          type="password"
          placeholder="Enter Password"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px"
          }}
        />

        <button style={{
          width: "100%",
          padding: "12px",
          background: "#16a34a",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}>
          Register
        </button>

        <p style={{
          marginTop: "15px",
          textAlign: "center"
        }}>
          Already have an account?

          <Link
            to="/"
            style={{
              color: "blue",
              marginLeft: "5px"
            }}
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Register;