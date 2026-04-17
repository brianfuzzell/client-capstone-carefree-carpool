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
} from "../../services/driverService";
import { getAllRiders } from "../../services/riderService";

export const Account = ({ currentDriver, userDrivers, userRiders }) => {
  const [allUsers, setAllUsers] = useState([]);
  const [user, setUser] = useState({});
  const [driver, setDriver] = useState({});
  const [rider, setRider] = useState({});
  const [allRiders, setAllRiders] = useState([]);
  const [allDrivers, setAllDrivers] = useState([]);

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
    getUserById(currentDriver.id).then((data) => {
      const userObj = data[0];
      setUser(userObj);
    });
  }, [currentDriver]);

  const handleSave = (event) => {
    event.preventDefault();

    const editedDriver = {
      id: driver.id,
      fullName: driver.fullName,
      phone: driver.phone,
      userId: driver.userId,
    };

    updateDriver(editedDriver);
  };

  const handlePhoneChange = (event) => {
    const stateCopy = { ...driver }
    stateCopy[event.target.name] = event.target.name
    setDriver(stateCopy)
  }

  const handleEmailChange = (event) => {
    const stateCopy = { ...user }
    stateCopy[event.target.name] = event.target.name
    setUser(stateCopy)
  }

  const driversInAccount = userDrivers
    .map((driver) => driver.fullName)
    .join(", ");

  const ridersInAccount = userRiders.map((rider) => rider.fullName).join(", ");

  return (
    <Form>
      <div>
        <h2>Account</h2>
      </div>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <h4>Simpsons</h4>
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
          <Form.Control type="tel" placeholder={currentDriver.phone} name="phone" value={currentDriver.phone ? currentDriver.phone : ''} onChange={handlePhoneChange} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder={currentDriver.email} name="email" value={currentDriver.email ? currentDriver.email : ''} onChange={handleEmailChange} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Save</Button>
        </Col>
      </Form.Group>
    </Form>
  );
};
