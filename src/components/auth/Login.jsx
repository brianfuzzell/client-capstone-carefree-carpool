import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { getDriverByEmail } from "../../services/driverService" 

export const Login = () => {
  const [email, set] = useState("carefree.carpool@carpool.app")
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    getDriverByEmail(email).then((foundUsers) => {
      if (foundUsers.length === 1) {
        const user = foundUsers[0]
        localStorage.setItem(
          "carpool_driver",
          JSON.stringify({
            id: user.id,
            userId: user.userId,
            fullName: user.fullName,
            email: user.email,
            phone: user.phone
          })
        )

        navigate("/")
      } else {
        window.alert("Invalid login")
      }
    })
  }

  return (
    <main className="container-login body-container">
      <section>
        <form className="form-login" onSubmit={handleLogin}>
          <h1>Carefree Carpool</h1>
          <h2>Please sign in</h2>
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
            <div className="form-group">
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
  )
}
