export const getAllDrivers = () => {
  return fetch("http://localhost:8088/drivers").then((res) => res.json());
};

export const getDriverById = () => {
  return fetch(`http://localhost:8088/drivers/${id}`).then((res) => res.json())
}

export const updateDriver = (driver) => {
  return fetch(`http://localhost:8088/drivers/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(driver)
  })
}