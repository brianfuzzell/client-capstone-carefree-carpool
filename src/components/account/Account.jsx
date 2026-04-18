import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  getAllUsers,
  getUserById,
  getUserDrivers,
} from "../../services/userService";
import { useEffect, useState } from "react";
import { data } from "react-router-dom";
import {
  getAllDrivers,
  getDriverById,
  updateDriver,
  createDriver,
} from "../../services/driverService";
import { getAllRiders, createRider } from "../../services/riderService";

export const Account = ({ currentDriver, userDrivers, userRiders }) => {
  const [allUsers, setAllUsers] = useState([]);
  const [user, setUser] = useState({});
  const [allRiders, setAllRiders] = useState([]);
  const [allDrivers, setAllDrivers] = useState([]);
  const [phone, setPhone] = useState(currentDriver.phone);
  const [email, setEmail] = useState(currentDriver.email);
  const [newDriverName, setNewDriverName] = useState("");
  const [newDriverPhone, setNewDriverPhone] = useState("");
  const [newDriverEmail, setNewDriverEmail] = useState("");
  const [newRiderName, setNewRiderName] = useState("");

  useEffect(() => {
    getAllUsers().then((usersArray) => {
      setAllUsers(usersArray);
    });
  }, []);

  useEffect(() => {
    getAllRiders().then((ridersArray) => {
      setAllRiders(ridersArray);
    });
  }, []);

  useEffect(() => {
    getAllDrivers().then((driversArray) => {
      setAllDrivers(driversArray);
    });
  }, []);

  useEffect(() => {
    if (currentDriver.userId) {
      getUserById(currentDriver.userId).then((data) => {
        const userObj = data[0];
        setUser(userObj);
      });
    }
  }, [currentDriver]);

  useEffect(() => {
    setPhone(currentDriver.phone || "");
    setEmail(currentDriver.email || "");
  }, [currentDriver]);

  const handleSave = (event) => {
    event.preventDefault();

    const editedDriver = {
      ...currentDriver,
      phone: phone,
      email: email,
    };

    updateDriver(editedDriver).then(() => {
      localStorage.setItem("carpool_driver", JSON.stringify(editedDriver));
    });
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const driversInAccount = userDrivers
    .map((driver) => driver.fullName)
    .join(", ");

  const ridersInAccount = userRiders.map((rider) => rider.fullName).join(", ");

  const handleAddDriver = (event) => {
    event.preventDefault();

    const newDriver = {
      fullName: newDriverName,
      phone: newDriverPhone,
      email: newDriverEmail,
      userId: currentDriver.userId,
    };

    createDriver(newDriver).then(() => {
      setNewDriverName("");
      setNewDriverPhone("");
      setNewDriverEmail("");
      window.alert("New driver added");
    });
  };

  const handleAddRider = (event) => {
    event.preventDefault();

    const newRider = {
      fullName: newRiderName,
      userId: currentDriver.userId,
    };

    createRider(newRider).then(() => {
      setNewRiderName("");
      window.alert("New rider added");
    });
  };

  return (
    <Form>
      <div>
        <h2>Account</h2>
      </div>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <h4>{user?.familyName}</h4>
        <p>
          <strong>Driver(s): </strong>
          {driversInAccount}
        </p>
        <br />
        <p>
          <strong>Rider(s): </strong>
          {ridersInAccount}
        </p>
        <Form.Label column sm={2}>
          Phone
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="tel"
            placeholder={currentDriver.phone}
            name="phone"
            value={phone ? phone : ""}
            onChange={handlePhoneChange}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="email"
            placeholder={currentDriver.email}
            name="email"
            value={email ? email : ""}
            onChange={handleEmailChange}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit" onClick={handleSave}>
            Save
          </Button>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <h5>Add Driver</h5>

        <Form.Label column sm={2}>
          Full Name
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            placeholder="Driver name"
            name="add-driver"
            value={newDriverName}
            onChange={(event) => {
              setNewDriverName(event.target.value);
            }}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Phone
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="tel"
            placeholder="Driver phone #"
            name="phone"
            value={newDriverPhone}
            onChange={(event) => {
              setNewDriverPhone(event.target.value);
            }}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="email"
            placeholder="Driver email"
            name="email"
            value={newDriverEmail}
            onChange={(event) => {
              setNewDriverEmail(event.target.value);
            }}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button variant="outline-secondary" type="submit" onClick={handleAddDriver}>
            Add Driver
          </Button>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <h5>Add Rider</h5>

        <Form.Label column sm={2}>
          Full Name
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            placeholder="Rider name"
            name="add-rider"
            value={newRiderName}
            onChange={(event) => {
              setNewRiderName(event.target.value);
            }}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button variant="outline-secondary" type="submit" onClick={handleAddRider}>
            Add Rider
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
};
