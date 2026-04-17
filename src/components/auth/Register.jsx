import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { createUser } from "../../services/userService.js"
import { getDriverByEmail, createDriver } from "../../services/driverService.js"

export const Register = (props) => {
  const [driver, setDriver] = useState({
    email: "",
    fullName: "",
    phone: "",
    userId: null
  })
  let navigate = useNavigate()

  const registerNewDriver = () => {
    createDriver(driver).then((createDriver) => {
      if (createDriver.hasOwnProperty("id")) {
        localStorage.setItem(
          "carpool_driver",
          JSON.stringify({
            id: createDriver.id
          })
        )

        navigate("/")
      }
    })
  }

  const handleRegister = (e) => {
    e.preventDefault()
    getDriverByEmail(driver.email).then((response) => {
      if (response.length > 0) {
        // Duplicate email. No good.
        window.alert("Account with that email address already exists")
      } else {
        // Good email, create user.
        registerNewDriver()
      }
    })
  }

  const updateDriver = (evt) => {
    const copy = { ...driver }
    copy[evt.target.id] = evt.target.value
    setDriver(copy)
  }

  return (
    <main style={{ textAlign: "center" }}>
      <form className="form-login" onSubmit={handleRegister}>
        <h1>Carefree Carpool</h1>
        <h2>Please Register</h2>
        <fieldset>
          <div className="form-group">
            <input
              onChange={updateDriver}
              type="text"
              id="fullName"
              className="form-control"
              placeholder="Enter your name"
              required
              autoFocus
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <input
              onChange={updateDriver}
              type="email"
              id="email"
              className="form-control"
              placeholder="Email address"
              required
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <button className="login-btn btn-info" type="submit">
              Register
            </button>
          </div>
        </fieldset>
      </form>
    </main>
  )
}
