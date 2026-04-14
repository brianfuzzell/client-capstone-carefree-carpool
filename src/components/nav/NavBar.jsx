import { Link } from "react-router-dom ";
export const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to="/schedule">Schedule</Link>
      </li>
      <li>
        <Link to="/rides">Rides</Link>
      </li>
      <li>Settings dropdown menu</li>
    </ul>
  );
};
