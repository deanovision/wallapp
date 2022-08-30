import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuthorizer } from "@authorizerdev/authorizer-react";
const Nav = () => {
  const { logout, user } = useAuthorizer();
  const navigate = useNavigate();
  const redirectOnLogout = () => {
    logout();
    navigate("../login");
  };
  return (
    <nav className="nav-bar">
      <ul className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/wall">Wall</Link>
        {user ? (
          <>
            <button onClick={redirectOnLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </>
        )}
      </ul>
    </nav>
  );
};
export default Nav;
