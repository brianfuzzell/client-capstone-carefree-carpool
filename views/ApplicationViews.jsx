import { useEffect, useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { NavBar } from "../src/components/nav/NavBar";
import { Welcome } from "../src/components/welcome/Welcome";
import { Schedule } from "../src/components/schedule/Schedule";
import { Rides } from "../src/components/rides/Rides";
import { Account } from "../src/components/account/Account";
import { getUserDrivers, getUserRiders } from "../src/services/userService";

export const ApplicationViews = () => {
  const [currentDriver, setCurrentDriver] = useState({});
  const [userDrivers, setUserDrivers] = useState([]);
  const [userRiders, setUserRiders] = useState([]);

  useEffect(() => {
    const localCarpoolDriver = localStorage.getItem("carpool_driver");
    const carpoolDriverObject = JSON.parse(localCarpoolDriver);

    setCurrentDriver(carpoolDriverObject);
  }, []);

  useEffect(() => {
    if (currentDriver.id) {
      getUserDrivers().then((usersArray) => {
        const foundUser = usersArray.find(
          (user) => user.id === currentDriver.userId,
        );

        const drivers = foundUser?.drivers || [];

        setUserDrivers(drivers);
      });
    }
  }, [currentDriver.id]);

  useEffect(() => {
    if (currentDriver.id) {
      getUserRiders().then((usersArray) => {
        const foundUser = usersArray.find(
          (user) => user.id === currentDriver.userId,
        );
        const riders = foundUser?.riders || [];

        setUserRiders(riders);
      });
    }
  }, [currentDriver.id]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar currentDriver={currentDriver} />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome currentDriver={currentDriver} />} />
        <Route
          path="/schedule"
          element={<Schedule currentDriver={currentDriver} />}
        />
        <Route
          path="/rides"
          element={
            <Rides
              currentDriver={currentDriver}
              userDrivers={userDrivers}
              userRiders={userRiders}
            />
          }
        />
        <Route
          path="/account"
          element={
            <Account
              currentDriver={currentDriver}
              userDrivers={userDrivers}
              userRiders={userRiders}
            />
          }
        />
      </Route>
    </Routes>
  );
};
