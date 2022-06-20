import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";

export const Navbar = () => {
  const { logout } = useLogout();

  return (
    <nav>
      <h1>My reading list</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link onClick={logout} to="/">
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};
