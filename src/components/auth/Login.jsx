import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { getDriverByEmail } from "../../services/driverService";

export const Login = () => {
  const [email, set] = useState("");
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
    <Form className="body-container" onSubmit={handleLogin}>
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
      
        <Form.Group controlId="formHorizontalEmail" className="form-container">
          <h5>Please sign in</h5>
        
          <Form.Control
            type="email"
            value={email}
            onChange={(evt) => set(evt.target.value)}
            className="form-control"
            placeholder="Email address"
            required
            autoFocus
          />
        </Form.Group>

        <Form.Group as={Row} className="mb-3 account-buttons">
        <Col>
          <Button type="submit">
            Sign in
          </Button>
        </Col>
      </Form.Group>
      
       <Form.Group>
        <Col>
          <Link to="/register">Not a member yet?</Link>
        </Col>
        </Form.Group> 
      
    </Form>
  );
};
