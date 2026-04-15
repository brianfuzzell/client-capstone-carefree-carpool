export const getAllRiders = () => {
  fetch("http://localhost:8088/riders").then((res) => res.json());
};
