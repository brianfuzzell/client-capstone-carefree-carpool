export const getAllDrivers = () => {
  return fetch("http://localhost:8088/drivers").then((res) => res.json());
};

export const getDriverById = () => {
  return fetch(`http://localhost:8088/drivers/${id}`).then((res) => res.json());
};

export const getDriverByEmail = (email) => {
  return fetch(`http://localhost:8088/drivers?email=${email}`).then((res) =>
    res.json(),
  );
};

export const updateDriver = (driver) => {
  return fetch(`http://localhost:8088/drivers/${driver.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(driver),
  }).then((res) => res.json());
};

export const createDriver = async (driver) => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(driver),
  };
  return fetch("http://localhost:8088/drivers", postOptions).then((res) =>
    res.json(),
  );
};
