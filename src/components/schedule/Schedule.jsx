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
      const groupedShifts = {};

      shiftsArray.forEach((shift) => {
        const date = shift.date;

        if (!groupedShifts[date]) {
          groupedShifts[date] = [];
        }

        groupedShifts[date].push(shift);
      });

      setShiftsWithDetails(groupedShifts);
      console.log("Grouped shifts", groupedShifts);
    });
  }, []);

  useEffect(() => {
    getAllRiders().then((ridersArray) => {
      setAllRiders(ridersArray);
    });
  }, []);

  return (
    <div className="body-container">
      <div>
        <span
          className="material-symbols-outlined"
          style={{
            fontSize: "100px",
            color: "#7ba591",
            fontVariationSettings: `'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48`,
          }}
        >
          directions_car
        </span>
      </div>
      <h1>Carefree Carpool</h1>
      <div>Schedule rides with ease</div>
      <h2>Schedule</h2>
      <h5>This Week at a Glance</h5>

      <article>
        {/* Object.keys extracts property names (keys) and puts them into an array */}
        {Object.keys(shiftsWithDetails)
          .sort()
          .map((date) => {
            const shiftsForThisDate = shiftsWithDetails[date];

            const morningShift = shiftsForThisDate.find(
              (shift) => shift.morning === true,
            );
            const afternoonShift = shiftsForThisDate.find(
              (shift) => shift.afternoon === true,
            );

            const morningRiderIds =
              morningShift?.riderShifts.map(
                (riderShift) => riderShift.riderId,
              ) || [];
            const morningRiders = allRiders.filter((rider) =>
              morningRiderIds.includes(rider.id),
            );

            const afternoonRiderIds =
              afternoonShift?.riderShifts.map(
                (riderShift) => riderShift.riderId,
              ) || [];
            const afternoonRiders = allRiders.filter((rider) =>
              afternoonRiderIds.includes(rider.id),
            );

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

            return (
              <Accordion key={date}>
                <Accordion.Item eventKey={date}>
                  <Accordion.Header>{formattedDate(date)}</Accordion.Header>
                  <Accordion.Body>
                    {morningShift && (
                      <>
                        <div>
                          <h5>Morning</h5>
                          <strong>Driver: </strong>
                          {morningShift.driver.fullName}
                        </div>

                        <div>
                          <strong>Riders: </strong>
                          {morningRiders
                            .map((rider) => rider.fullName)
                            .join(", ")}
                        </div>
                      </>
                    )}

                    {afternoonShift && (
                      <>
                        <div>
                          <h5>Afternoon</h5>
                          <strong>Driver: </strong>
                          {afternoonShift.driver.fullName}
                        </div>
                        <div>
                          <strong>Riders: </strong>
                          {afternoonRiders
                            .map((rider) => rider.fullName)
                            .join(", ")}
                        </div>
                      </>
                    )}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            );
          })}
      </article>
    </div>
  );
};
