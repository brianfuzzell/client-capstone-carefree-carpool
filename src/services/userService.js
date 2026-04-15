export const getAllUsers = () => {
  return fetch("http://localhost:8088/users").then((res) => res.json());
};

export const getUserDrivers = () => {
  return fetch("http://localhost:8088/users?_embed=drivers").then((res) =>
    res.json(),
  );
};

export const getUserRiders = () => {
  return fetch("http://localhost:8088/users?_embed=riders").then((res) =>
    res.json(),
  );
};
