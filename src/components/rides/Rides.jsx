import { Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { RideCard } from "./RideCard";

export const Rides = ({ currentDriver }) => {
  return (
    <>
      <h2>Rides</h2>
      <RideCard currentDriver={currentDriver} />
    </>
  );
};
