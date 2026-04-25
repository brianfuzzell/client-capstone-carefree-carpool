import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../services/userService.js";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  getDriverByEmail,
  createDriver,
} from "../../services/driverService.js";

export const Register = (props) => {
  const [driver, setDriver] = useState({
    email: "",
    fullName: "",
    phone: "",
    userId: null,
  });
  let navigate = useNavigate();

  const registerNewDriver = () => {
    const nameParts = driver.fullName.split(" ");
    const familyName = nameParts[nameParts.length - 1];

    const newUser = {
      familyName: familyName,
    };

    createUser(newUser)
      .then((createdUser) => {
        const driverWithUserId = {
          ...driver,
          userId: createdUser.id,
        };
        return createDriver(driverWithUserId);
      })
      .then((createdDriver) => {
        localStorage.setItem(
          "carpool_driver",
          JSON.stringify({
            id: createdDriver.id,
            userId: createdDriver.userId,
            fullName: createdDriver.fullName,
            email: createdDriver.email,
            phone: createdDriver.phone,
          }),
        );
        navigate("/");
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    getDriverByEmail(driver.email).then((response) => {
      if (response.length > 0) {
        // Duplicate email. No good.
        window.alert("Account with that email address already exists");
      } else {
        // Good email, create user.
        registerNewDriver();
      }
    });
  };

  const updateDriver = (evt) => {
    const copy = { ...driver };
    copy[evt.target.id] = evt.target.value;
    setDriver(copy);
  };

  return (
    <Form className="body-container" onSubmit={handleRegister}>
      <header className="header account-space">
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

      <Form.Group className="form-container">
        <h5>Please Register</h5>

        <Form.Control
          type="text"
          value={driver.fullName}
          id="fullName"
          onChange={updateDriver}
          className="form-control"
          placeholder="Enter your full name"
          required
        />

        <Form.Control
          type="email"
          value={driver.email}
          id="email"
          onChange={updateDriver}
          className="form-control"
          placeholder="Email address"
          required
        />
      </Form.Group>

      <Form.Group as={Row} className="mb-3 account-buttons">
        <Col>
          <Button type="submit">Register</Button>
        </Col>
      </Form.Group>
    </Form>
  );
};
