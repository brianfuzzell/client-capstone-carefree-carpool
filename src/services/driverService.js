export const getAllDrivers = () => {
  return fetch("http://localhost:8088/drivers").then((res) => res.json());
};
