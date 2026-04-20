import { useEffect, useState } from "react";
import {
  getShiftsByDriverAndRiderShifts,
  deleteShift,
  editShift,
} from "../../services/shiftService";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { getAllRiders } from "../../services/riderService";
import { Modal } from "react-bootstrap";

export const Rides = ({ currentDriver }) => {
  const [allRiders, setAllRiders] = useState([]);
  const [myShifts, setMyShifts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingShift, setEditingShift] = useState(null);

  const formattedDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
  
    const monthNames = [
      "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",
    ];
        
    return `${monthNames[parseInt(month) - 1]} ${parseInt(day)}, ${parseInt(year)}`;
  }
  
  useEffect(() => {
    if (currentDriver.id) {
      getAllRiders().then(setAllRiders);

      getShiftsByDriverAndRiderShifts().then((shiftsArray) => {
        const filtered = shiftsArray.filter(
          (shift) => shift.driverId === currentDriver.id,
        );
        setMyShifts(filtered);
      });
    }
  }, [currentDriver.id]);

  const handleEdit = (shift) => {
    const editedRide = {
      id: shift.id,
      date: shift.date,
      morning: shift.morning,
      afternoon: shift.afternoon,
      driverId: shift.driverId,
    };

    editShift(editedRide).then(() => {
      getShiftsByDriverAndRiderShifts().then((shiftsArray) => {
        const filtered = shiftsArray.filter(
          (shift) => shift.driverId === currentDriver.id,
        );
        setMyShifts(filtered);
      });
    });
  };

  const handleOpenModal = (shift) => {
    setEditingShift(shift);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingShift(null);
  };

  const handleDelete = (shiftId) => {
    deleteShift(shiftId).then(() => {
      getShiftsByDriverAndRiderShifts().then((shiftsArray) => {
        const filtered = shiftsArray.filter(
          (shift) => shift.driverId === currentDriver.id,
        );
        setMyShifts(filtered);
      });
    });
  };

  return (
    <Form>
      {myShifts.map((shift) => {
        
        const riderIds = shift.riderShifts.map(
          (riderShift) => riderShift.riderId,
        );
        const ridersOnThisShift = allRiders.filter((rider) =>
          riderIds.includes(rider.id),
        );

        return (
          <div key={shift.id}>
            <Form.Group className="mb-3">
              <div>
                <h5>{formattedDate}</h5>
                <p>{shift.morning ? "Morning" : "Afternoon"}</p>
              </div>
              <div>
                <div>
                  <strong>Driver: </strong>
                  {shift.driver.fullName}
                </div>
              </div>
              <Form.Label>
                <strong>Riders:</strong>
              </Form.Label>

              {allRiders.map((rider) => {
                const isOnThisShift = ridersOnThisShift.some(
                  (riderInShift) => riderInShift.id === rider.id,
                );

                return (
                  <Form.Check
                    key={rider.id}
                    type="checkbox"
                    label={rider.fullName}
                    checked={isOnThisShift}
                    disabled
                    inline
                  />
                );
              })}
            </Form.Group>

            <Button
              variant="primary"
              type="button"
              onClick={() => handleOpenModal(shift)}
            >
              Edit
            </Button>
            <Button
              variant="danger"
              type="button"
              onClick={() => handleDelete(shift.id)}
            >
              Delete
            </Button>
          </div>
        );
      })}
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Ride
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          {editingShift && (
            
             <>
             <h5>{formattedDate(editingShift.date)}</h5>
              <p>{editingShift.morning ? "Morning" : "Afternoon"}</p>
              <p>
                Form to edit goes here
              </p>
              </>
            )}
         
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => handleEdit(editingShift)}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </Form>
  );
};
