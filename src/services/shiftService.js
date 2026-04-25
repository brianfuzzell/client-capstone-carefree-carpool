export const getAllShifts = () => {
  return fetch("http://localhost:8088/shifts").then((res) => res.json());
};

export const getShiftsByDriverAndRiderShifts = () => {
  return fetch(
    "http://localhost:8088/shifts?_expand=driver&_embed=riderShifts",
  ).then((res) => res.json());
};

export const createShift = (newShift) => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newShift),
  };
  return fetch("http://localhost:8088/shifts", postOptions).then((res) =>
    res.json(),
  );
};

export const editShift = (shiftObject) => {
  return fetch(`http://localhost:8088/shifts/${shiftObject.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(shiftObject),
  }).then((res) => res.json());
};

export const deleteShift = (shiftId) => {
  return fetch(`http://localhost:8088/shifts/${shiftId}`, {
    method: "DELETE",
  });
};
