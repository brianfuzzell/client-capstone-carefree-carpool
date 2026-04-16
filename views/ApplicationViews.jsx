import { useEffect, useState } from "react";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localCarpoolUser = localStorage.getItem("carpool_user");
    const carpoolUserObject = JSON.parse(localCarpoolUser);

    setCurrentUser(carpoolUserObject);
  }, []);

  return  (
    <></>
  );
};
