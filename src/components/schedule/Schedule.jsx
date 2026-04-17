import { useEffect, useState } from "react";
import {
  getAllShifts,
  getShiftsByDriverAndRiderShifts,
} from "../../services/shiftService";
import Accordion from "react-bootstrap/Accordion";
import { getAllRiders } from "../../services/riderService";

export const Schedule = ({ currentDriver }) => {
  const [allShifts, setAllShifts] = useState([]);
  const [shiftsWithDetails, setShiftsWithDetails] = useState([]);
  const [allRiders, setAllRiders] = useState([]);

  useEffect(() => {
    getAllShifts().then((shiftsArray) => {
      setAllShifts(shiftsArray);
    });
  }, []);

  useEffect(() => {
    getShiftsByDriverAndRiderShifts().then((shiftsArray) => {
      setShiftsWithDetails(shiftsArray);
    });
  }, []);

  useEffect(() => {
    getAllRiders().then((ridersArray) => {
      setAllRiders(ridersArray);
    });
  }, []);

  return (
    <>
      <h2>Schedule</h2>
      <h5>This Week at a Glance</h5>

      <article>
        {shiftsWithDetails.map((shift) => {
          const riderIds = shift.riderShifts.map(
            (riderShift) => riderShift.riderId,
          );
          const ridersOnThisShift = allRiders.filter((rider) =>
            riderIds.includes(rider.id),
          );
          const date = new Date(shift.date);
          const formattedDate = date.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
          });

          return (
            <Accordion defaultActiveKey="0" key={shift.id}>
              <Accordion.Item eventKey={shift.id}>
                <Accordion.Header>
                  {formattedDate} {shift.morning ? "Morning" : "Afternoon"}
                </Accordion.Header>
                <Accordion.Body>
                  <div>
                    {shift.morning ? (
                      <>
                        <div>
                          <strong>Driver: </strong>
                          {shift.driver.fullName}
                        </div>

                        <div>
                          <strong>Riders: </strong>
                          {ridersOnThisShift
                            .map((rider) => rider.fullName)
                            .join(", ")}
                        </div>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                  <div>
                    {shift.afternoon ? (
                      <>
                        <div>
                          <strong>Driver: </strong>
                          {shift.driver.fullName}
                        </div>
                        <div>
                          <strong>Riders: </strong>
                          {ridersOnThisShift
                            .map((rider) => rider.fullName)
                            .join(", ")}
                        </div>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          );
        })}
      </article>
    </>
  );
};
