import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

 useEffect(() => {

  const token = localStorage.getItem("token");

  if (!token) {
    navigate("/");
  }

  const storedUser = localStorage.getItem("user");

  if (storedUser) {
    setUser(JSON.parse(storedUser));
  }

  }, []);
  return (

    <div style={{
      minHeight: "100vh",
      background: "#f3f4f6",
      padding: "30px"
    }}>

      <div style={{
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "30px"
  }}>

  <h1 style={{
    color: "#2563eb"
  }}>
    Welcome, {user?.name}
  </h1>

   <button
    onClick={() => {
      localStorage.removeItem("token");
      navigate("/");
    }}
    style={{
      padding: "10px 20px",
      background: "red",
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer"
    }}
   >
    Logout
   </button>

   </div>

      <div style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap"
      }}>

        {/* Balance Card */}
        <div style={{
          background: "white",
          padding: "25px",
          borderRadius: "15px",
          width: "250px",
          boxShadow: "0px 0px 15px rgba(0,0,0,0.1)"
        }}>

          <h3>Total Balance</h3>

          <h1 style={{
            color: "green"
          }}>
            ₹ {user?.balance || 0}
          </h1>

        </div>

        {/* Savings Card */}
        <div style={{
          background: "white",
          padding: "25px",
          borderRadius: "15px",
          width: "250px",
          boxShadow: "0px 0px 15px rgba(0,0,0,0.1)"
        }}>

          <h3>Savings Account</h3>

          <h1 style={{
            color: "#2563eb"
          }}>
            ₹ 30,000
          </h1>

        </div>

        {/* Current Account */}
        <div style={{
          background: "white",
          padding: "25px",
          borderRadius: "15px",
          width: "250px",
          boxShadow: "0px 0px 15px rgba(0,0,0,0.1)"
        }}>

          <h3>Current Account</h3>

          <h1 style={{
            color: "orange"
          }}>
            ₹ 20,000
          </h1>

        </div>

      </div>

      {/* Transactions Table */}

      <div style={{
        marginTop: "40px",
        background: "white",
        padding: "25px",
        borderRadius: "15px",
        boxShadow: "0px 0px 15px rgba(0,0,0,0.1)"
      }}>

        <h2>Recent Transactions</h2>

        <table style={{
          width: "100%",
          marginTop: "20px",
          borderCollapse: "collapse"
        }}>

          <thead>

            <tr>

              <th style={{borderBottom: "1px solid gray", padding: "10px"}}>
                Name
              </th>

              <th style={{borderBottom: "1px solid gray", padding: "10px"}}>
                Amount
              </th>

              <th style={{borderBottom: "1px solid gray", padding: "10px"}}>
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            <tr>

              <td style={{padding: "10px"}}>
                Amazon
              </td>

              <td style={{padding: "10px"}}>
                ₹ 2,000
              </td>

              <td style={{
                padding: "10px",
                color: "red"
              }}>
                Debited
              </td>

            </tr>

            <tr>

              <td style={{padding: "10px"}}>
                Salary
              </td>

              <td style={{padding: "10px"}}>
                ₹ 40,000
              </td>

              <td style={{
                padding: "10px",
                color: "green"
              }}>
                Credited
              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Dashboard;