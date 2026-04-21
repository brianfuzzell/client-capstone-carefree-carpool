import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { getAllRiders } from "../../services/riderService";
import { getUserDrivers } from "../../services/userService";
import {
  getShiftsByDriverAndRiderShifts,
  deleteShift,
  editShift,
} from "../../services/shiftService";

export const Rides = ({ currentDriver }) => {
  const [allRiders, setAllRiders] = useState([]);
  const [userDrivers, setUserDrivers] = useState([]);
  const [myShifts, setMyShifts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingShift, setEditingShift] = useState(null);
  const [currentShiftDriver, setCurrentShiftDriver] = useState(
    currentDriver.fullName,
  );
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
    if (currentDriver.id) {
      getUserDrivers().then((usersArray) => {
        const foundUser = usersArray.find(
          (user) => user.id === currentDriver.userId,
        );

        const drivers = foundUser?.drivers || [];

        setUserDrivers(drivers);
      });
    }
  }, [currentDriver.id]);

  useEffect(() => {
    getAllRiders().then((ridersArray) => {
      setAllRiders(ridersArray);
    });
  }, []);

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
      id: editingShift.id,
      date: editDate,
      morning: editMorning,
      afternoon: editAfternoon,
      driverId: editDriverId,
    };

    const originalRiderIds = editingShift.riderShifts.map(
      riderShift => riderShift.riderId)
    
    const ridersToRemove = editingShift.riderShifts.filter(
      riderShift => !editRiderIds.includes(riderShift.riderId)
    )

    const ridersToAdd = editRiderIds.filter(
      riderId => !originalRiderIds.includes(riderId)
    )

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
    const confirmation = window.alert(
      "Are you sure you want to delete this ride?",
    );
    if (confirmation) {
      deleteShift(shiftId).then(() => {
        getShiftsByDriverAndRiderShifts().then((shiftsArray) => {
          const filtered = shiftsArray.filter(
            (shift) => shift.driverId === currentDriver.id,
          );
          setMyShifts(filtered);
        });
      });
    }
  };

  const handleDateChange = (event) => {
    setEditDate(event.target.value);
  };

  const handleDriverChange = (event) => {
    setNewDriverName(event.target.value);
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
                <h5>{formattedDate(shift.date)}</h5>
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
          {editingShift &&
            (() => {
              const riderIds = editingShift.riderShifts.map(
                (riderShift) => riderShift.riderId,
              );
              const ridersOnThisShift = allRiders.filter((rider) =>
                riderIds.includes(rider.id),
              );

              return (
                <>
                  <div className="mb-3">
                    <Form.Control
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

                    <Form.Label >
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
                  <Form.Label >
                    <strong>Riders:</strong>
                  </Form.Label>
                  {allRiders.map((rider) => {
                    const isSelected = editRiderIds.includes(rider.id)
          

                    return (
                      <Form.Check
                        key={rider.id}
                        type="checkbox"
                        label={rider.fullName}
                        checked={isSelected}
                        inline
                        onChange={() => {
                          if (isSelected) {
                            setEditRiderIds(editRiderIds.filter(id => id !== rider.id))
                          } else {
                            setEditRiderIds([...editRiderIds, rider.id])
                          }
                        }}
                      />
                    );
                  })}
                </>
              );
            })()}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => handleEdit(editingShift)}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </Form>
  );
};
