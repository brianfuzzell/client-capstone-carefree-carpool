export const getAllRiders = () => {
  return fetch("http://localhost:8088/riders").then((res) => res.json());
};

export const createRider = async (rider) => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(rider),
  };
  return fetch("http://localhost:8088/riders", postOptions).then((res) =>
    res.json(),
  );
};