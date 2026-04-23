import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { RideCard } from "./RideCard";
import {
  createShift,
  getShiftsByDriverAndRiderShifts,
} from "../../services/shiftService";
import { createRiderShift, getAllRiders } from "../../services/riderService";
import { getUserDrivers } from "../../services/userService";

export const Rides = ({ currentDriver }) => {
  const [allRiders, setAllRiders] = useState([]);
  const [userDrivers, setUserDrivers] = useState([]);
  const [myShifts, setMyShifts] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newDate, setNewDate] = useState("");
  const [newMorning, setNewMorning] = useState(false);
  const [newAfternoon, setNewAfternoon] = useState(false);
  const [newDriverId, setNewDriverId] = useState(currentDriver.id);
  const [newRiderIds, setNewRiderIds] = useState([]);

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
  }, [currentDriver.id, currentDriver.userId]);

  useEffect(() => {
    getAllRiders().then((ridersArray) => {
      setAllRiders(ridersArray);
    });
  }, []);

  useEffect(() => {
    if (currentDriver.id && userDrivers.length > 0) {
      getAllRiders().then(setAllRiders);

      getShiftsByDriverAndRiderShifts().then((shiftsArray) => {
        const familyDriverIds = userDrivers.map((driver) => driver.id);
        const filtered = shiftsArray.filter((shift) =>
          familyDriverIds.includes(shift.driverId),
        );

        const sorted = filtered.sort((a, b) => {
          if (a.date < b.date) return -1;
          if (a.date > b.date) return 1;
          if (a.date === b.date) {
            if (a.morning && b.afternoon) {
              return -1;
            }
            if (a.afternoon && b.morning) {
              return 1;
            }
          }
        });

        setMyShifts(sorted);
      });
    }
  }, [currentDriver.id, userDrivers]);

  const handleOpenAddModal = () => {
    setNewDate("");
    setNewMorning(false);
    setNewAfternoon(false);
    setNewDriverId(currentDriver.id);
    setNewRiderIds([]);
    setShowAddModal(true);
  };

  const handleCloseAddModal = () => {
    setShowAddModal(false);
  };

  const handleAddRide = () => {
    const addRideObject = {
      date: newDate,
      morning: newMorning,
      afternoon: newAfternoon,
      driverId: newDriverId,
    };

    createShift(addRideObject)
      .then((newlyCreatedShift) => {
        const addPromises = newRiderIds.map((riderId) => {
          const riderShift = {
            riderId: riderId,
            shiftId: newlyCreatedShift.id,
          };
          return createRiderShift(riderShift);
        });
        return Promise.all(addPromises);
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
        handleCloseAddModal();
      });
  };

  return (
    <div className="body-container">
      <div>
        <h2>Rides</h2>
      </div>
      <div>
        <Button variant="primary" type="button" onClick={handleOpenAddModal}>
          Add New Ride
        </Button>
      </div>

      <RideCard
        currentDriver={currentDriver}
        myShifts={myShifts}
        setMyShifts={setMyShifts}
        userDrivers={userDrivers}
        setUserDrivers={setUserDrivers}
      />
      <Modal
        show={showAddModal}
        onHide={handleCloseAddModal}
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Add Ride</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            id="addRideForm"
            onSubmit={(e) => {
              e.preventDefault();
              handleAddRide();
            }}
          >
            <div className="mb-3">
              <Form.Control
                required={true}
                type="date"
                name="date"
                value={newDate}
                onChange={(event) => setNewDate(event.target.value)}
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
                  required
                  checked={newMorning}
                  onChange={() => {
                    setNewMorning(true);
                    setNewAfternoon(false);
                  }}
                />
                <Form.Check
                  inline
                  label="Afternoon"
                  name="timeOfDay"
                  type="radio"
                  checked={newAfternoon}
                  onChange={() => {
                    setNewMorning(false);
                    setNewAfternoon(true);
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
                  checked={newDriverId === driver.id}
                  onChange={() => {
                    setNewDriverId(driver.id);
                  }}
                />
              ))}
            </div>
            <Form.Label>
              <strong>Riders:</strong>
            </Form.Label>
            <div>
              {allRiders.map((rider) => {
                const isSelected = newRiderIds.includes(rider.id);

                return (
                  <Form.Check
                    key={rider.id}
                    type="checkbox"
                    label={rider.fullName}
                    checked={isSelected}
                    inline
                    onChange={() => {
                      if (isSelected) {
                        setNewRiderIds(
                          newRiderIds.filter((id) => id !== rider.id),
                        );
                      } else {
                        setNewRiderIds([...newRiderIds, rider.id]);
                      }
                    }}
                  />
                );
              })}
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" form="addRideForm">
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
