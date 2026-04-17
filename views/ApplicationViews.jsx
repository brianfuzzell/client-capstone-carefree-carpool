import { useEffect, useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { NavBar } from "../src/components/nav/NavBar";
import { Welcome } from "../src/components/welcome/Welcome";
import { Schedule } from "../src/components/schedule/Schedule";
import { Rides } from "../src/components/rides/Rides";
import { Account } from "../src/components/account/Account";
import { getUserDrivers, getUserRiders } from "../src/services/userService";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [userDrivers, setUserDrivers] = useState([]) 
  const [userRiders, setUserRiders] = useState([])

  useEffect(() => {
    const localCarpoolUser = localStorage.getItem("carpool_user");
    const carpoolUserObject = JSON.parse(localCarpoolUser);

    setCurrentUser(carpoolUserObject);
  }, []);

  useEffect(() => {
    if (currentUser.id) {
    getUserDrivers().then((usersArray) => {
      const foundUser = usersArray.find(
        (user) => user.id === currentUser.id
      )
      const drivers = foundUser?.drivers || []
      
      setUserDrivers(drivers)
    })
  }
  }, [currentUser.id])

    useEffect(() => {
    if (currentUser.id) {
    getUserRiders().then((usersArray) => {
      const foundUser = usersArray.find(
        (user) => user.id === currentUser.id
      )
      const riders = foundUser?.riders || []
      
      setUserRiders(riders)
    })
  }
  }, [currentUser.id])

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar currentUser={currentUser} />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome currentUser={currentUser} />} />
        <Route path="/schedule" element={<Schedule currentUser={currentUser} />} />
        <Route path="/rides" element={<Rides currentUser={currentUser} userDrivers={userDrivers} userRiders={userRiders} />} />
        <Route path="/account" element={<Account currentUser={currentUser} userDrivers={userDrivers} userRiders={userRiders} />} />
      </Route>
    </Routes>
  );
};
