import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {
  createRiderShift,
  deleteRiderShift,
  getAllRiders,
} from "../../services/riderService";
import { getUserDrivers } from "../../services/userService";
import {
  getShiftsByDriverAndRiderShifts,
  deleteShift,
  editShift,
} from "../../services/shiftService";

export const RideCard = ({ currentDriver, myShifts, setMyShifts, userDrivers, setUserDrivers }) => {
  const [allRiders, setAllRiders] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingShift, setEditingShift] = useState(null);
  const [editDate, setEditDate] = useState("");
  const [editMorning, setEditMorning] = useState(false);
  const [editAfternoon, setEditAfternoon] = useState(false);
  const [editDriverId, setEditDriverId] = useState(null);
  const [editRiderIds, setEditRiderIds] = useState([]);

  const formattedDate = (dateString) => {
    const [year, month, day] = dateString.split("-");

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return `${monthNames[parseInt(month) - 1]} ${parseInt(day)}, ${parseInt(year)}`;
  };

  useEffect(() => {
    getAllRiders().then((ridersArray) => {
      setAllRiders(ridersArray);
    });
  }, []);

  const handleEdit = () => {
    const originalRiderIds = editingShift.riderShifts.map(
      (riderShift) => riderShift.riderId,
    );

    const ridersToRemove = editingShift.riderShifts.filter(
      (riderShift) => !editRiderIds.includes(riderShift.riderId),
    );

    const ridersToAdd = editRiderIds.filter(
      (riderId) => !originalRiderIds.includes(riderId),
    );

    const deletePromises = ridersToRemove.map((riderShift) =>
      deleteRiderShift(riderShift.id),
    );

    const addPromises = ridersToAdd.map((riderId) => {
      const newRiderShift = {
        riderId: riderId,
        shiftId: editingShift.id,
      };
      return createRiderShift(newRiderShift);
    });

    const editedRide = {
      id: editingShift.id,
      date: editDate,
      morning: editMorning,
      afternoon: editAfternoon,
      driverId: editDriverId,
    };

    Promise.all(deletePromises)
      .then(() => {
        return Promise.all(addPromises);
      })
      .then(() => {
        return editShift(editedRide);
      })
      .then(() => {
        return getShiftsByDriverAndRiderShifts();
      })
      .then((shiftsArray) => {
        const familyDriverIds = userDrivers.map((driver) => driver.id);
        const filtered = shiftsArray.filter((shift) =>
          familyDriverIds.includes(shift.driverId),
        );
        setMyShifts(filtered);
        handleCloseModal();
      });
  };

  const handleOpenModal = (shift) => {
    setEditingShift(shift);
    setEditDate(shift.date);
    setEditMorning(shift.morning);
    setEditAfternoon(shift.afternoon);
    setEditDriverId(shift.driverId);
    setEditRiderIds(shift.riderShifts.map((riderShift) => riderShift.riderId));

    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingShift(null);
  };

  const handleDelete = (shiftId) => {
    const confirmation = window.confirm(
      "Are you sure?",
    );
    if (confirmation) {
      deleteShift(shiftId).then(() => {
        getShiftsByDriverAndRiderShifts().then((shiftsArray) => {
          const familyDriverIds = userDrivers.map((driver) => driver.id);
          const filtered = shiftsArray.filter((shift) =>
            familyDriverIds.includes(shift.driverId),
          );
          setMyShifts(filtered);
        });
      });
    }
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
          <div className="app-space" key={shift.id}>
            <Form.Group className="mb-3">
              <div className="ride-details">
                <h5>{formattedDate(shift.date)}</h5>
                <p>{shift.morning ? "Morning" : "Afternoon"}</p>
              </div>
              <div>
                <div className="ride-details">
                  <strong>Driver: </strong>
                  {shift.driver.fullName}
                </div>
              </div>
              <div className="ride-details">
              <Form.Label className="ride-riders">
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
              </div>
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
          <Form id="editRideForm" onSubmit={(e) => {
            e.preventDefault()
            handleEdit()
          }}>
          {editingShift &&
            (() => {
          
              return (
                <>
                  <div className="mb-3">
                    <Form.Control
                      required={true}
                      type="date"
                      name="date"
                      value={editDate}
                      onChange={(event) => setEditDate(event.target.value)}
                    />
                    <Form.Label column sm={2}>
                      <strong>Shift</strong>
                    </Form.Label>

                    <div className="mb-3">
                      <Form.Check
                        required
                        inline
                        label="Morning"
                        name="timeOfDay"
                        type="radio"
                        checked={editMorning}
                        onChange={() => {
                          setEditMorning(true);
                          setEditAfternoon(false);
                        }}
                      />
                      <Form.Check
                        inline
                        label="Afternoon"
                        name="timeOfDay"
                        type="radio"
                        checked={editAfternoon}
                        onChange={() => {
                          setEditMorning(false);
                          setEditAfternoon(true);
                        }}
                      />
                    </div>

                    <Form.Label>
                      <strong>Driver</strong>
                    </Form.Label>
                    {userDrivers.map((driver) => (
                      <Form.Check
                        key={driver.id}
                        inline
                        label={driver.fullName}
                        name="Driver"
                        type="radio"
                        checked={editDriverId === driver.id}
                        onChange={() => {
                          setEditDriverId(driver.id);
                        }}
                      />
                    ))}
                  </div>
                  <Form.Label>
                    <strong>Riders:</strong>
                  </Form.Label>
                  {allRiders.map((rider) => {
                    const isSelected = editRiderIds.includes(rider.id);

                    return (
                      <Form.Check
                        key={rider.id}
                        type="checkbox"
                        label={rider.fullName}
                        checked={isSelected}
                        inline
                        onChange={() => {
                          if (isSelected) {
                            setEditRiderIds(
                              editRiderIds.filter((id) => id !== rider.id),
                            );
                          } else {
                            setEditRiderIds([...editRiderIds, rider.id]);
                          }
                        }}
                      />
                    );
                  })}
                </>
              );
            })()}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" form="editRideForm">Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </Form>
  );
};
