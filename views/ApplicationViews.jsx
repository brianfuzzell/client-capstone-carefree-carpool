import { useEffect, useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { NavBar } from "../src/components/nav/NavBar";
import { Welcome } from "../src/components/welcome/Welcome";
import { Schedule } from "../src/components/schedule/Schedule";
import { Rides } from "../src/components/rides/Rides";
import { Account } from "../src/components/account/Account";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localCarpoolUser = localStorage.getItem("carpool_user");
    const carpoolUserObject = JSON.parse(localCarpoolUser);

    setCurrentUser(carpoolUserObject);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/rides" element={<Rides />} />
        <Route path="/account" element={<Account />} />
      </Route>
    </Routes>
  );
};
