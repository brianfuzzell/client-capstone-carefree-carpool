import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getDriverByEmail } from "../../services/driverService";

export const Login = () => {
  const [email, set] = useState("carefree.carpool@carpool.app");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    getDriverByEmail(email).then((foundUsers) => {
      if (foundUsers.length === 1) {
        const user = foundUsers[0];
        localStorage.setItem(
          "carpool_driver",
          JSON.stringify({
            id: user.id,
            userId: user.userId,
            fullName: user.fullName,
            email: user.email,
            phone: user.phone,
          }),
        );

        navigate("/");
      } else {
        window.alert("Invalid login");
      }
    });
  };

  return (
    <main className="body-container">
      <header className="header">
        <span
          className="material-symbols-outlined"
          style={{
            fontSize: "100px",
            color: "#7ba591",
            fontVariationSettings: `'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48`,
          }}
        >
          directions_car
        </span>
        <h1>Carefree Carpool</h1>
      </header>
      <section className="container-login">
        <form className="form-login" onSubmit={handleLogin}>
          <h5>Please sign in</h5>
          <fieldset>
            <div className="form-group">
              <input
                type="email"
                value={email}
                onChange={(evt) => set(evt.target.value)}
                className="form-control"
                placeholder="Email address"
                required
                autoFocus
              />
            </div>
          </fieldset>
          <fieldset>
            <div>
              <button className="login-btn btn-info" type="submit">
                Sign in
              </button>
            </div>
          </fieldset>
        </form>
      </section>
      <section>
        <Link to="/register">Not a member yet?</Link>
      </section>
    </main>
  );
};
