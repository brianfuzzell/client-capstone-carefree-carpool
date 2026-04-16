import { useEffect, useState } from "react";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  // We set up state for this current user
  // Then on initial render of this component, get the current user's data and keep it in local storage
  // > then set it into state

  // Need to pass the current user's state down to Ticket List. And then from Ticket List down to Ticket
  // - passing state down through mult levels is called Prop Drilling

  useEffect(() => {
    const localCarpoolUser = localStorage.getItem("carpool_user");
    const carpoolUserObject = JSON.parse(localCarpoolUser);

    setCurrentUser(carpoolUserObject);
  }, []);

  // If the current user is an employee, return the employee views. Otherwise, return the customer views
  return  (
    <></>
  );
};
