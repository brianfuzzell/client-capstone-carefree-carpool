import { useEffect, useState } from "react";
import { getShiftsByDriverAndRiderShifts } from "../../services/shiftService";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { getAllRiders } from "../../services/riderService";

export const Rides = ({ currentDriver }) => {
  const [allRiders, setAllRiders] = useState([]);
  const [shiftsWithDetails, setShiftsWithDetails] = useState([]);
  const [myShifts, setMyShifts] = useState([]);

  useEffect(() => {
    getAllRiders().then((ridersArray) => {
      setAllRiders(ridersArray);
    });
  }, []);

  useEffect(() => {
    getShiftsByDriverAndRiderShifts().then((shiftsArray) => {
      setShiftsWithDetails(shiftsArray);
    });
  }, []);

  useEffect(() => {
    if (currentDriver.id) {
      getShiftsByDriverAndRiderShifts().then((shiftsArray) => {
        const filtered = shiftsArray.filter(
          (shift) => shift.driverId === currentDriver.id,
        );
        setMyShifts(filtered);
      });
    }
  }, [currentDriver.id]);

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
              <Form.Label><strong>Riders:</strong> </Form.Label>

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

            <Button variant="primary" type="submit">
              Edit {/* triggers an "edit" state to toggle local state */}
            </Button>
            <Button variant="danger" type="submit">
              Delete
            </Button>
            {/* //onClick={handleDelete}   */}
          </div>
        );
      })}
    </Form>
  );
};
