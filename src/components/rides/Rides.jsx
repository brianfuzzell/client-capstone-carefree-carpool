import { useEffect, useState } from "react";
import {
  getShiftsByDriverAndRiderShifts,
  deleteShift,
} from "../../services/shiftService";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { getAllRiders } from "../../services/riderService";

export const Rides = ({ currentDriver }) => {
  const [allRiders, setAllRiders] = useState([]);
  const [myShifts, setMyShifts] = useState([]);


  useEffect(() => {
    if (currentDriver.id) {
      getAllRiders().then(setAllRiders)

      getShiftsByDriverAndRiderShifts().then((shiftsArray) => {
        const filtered = shiftsArray.filter(
          (shift) => shift.driverId === currentDriver.id,
        );
        setMyShifts(filtered);
      });
    }
  }, [currentDriver.id]);

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
        const date = new Date(shift.date);
        const formattedDate = date.toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
        });
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
                <strong>Riders:</strong>{" "}
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

            <Button variant="primary" type="button">
              Edit {/* triggers an "edit" state to toggle local state */}
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
    </Form>
  );
};
