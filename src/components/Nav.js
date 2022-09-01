import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuthorizer } from "@authorizerdev/authorizer-react";
import Logo from "./Logo";
const Nav = () => {
  const { logout, user } = useAuthorizer();
  const navigate = useNavigate();
  const redirectOnLogout = () => {
    logout();
    navigate("../login");
  };
  return (
    <nav className="nav-bar">
      <Logo />
      <ul className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/wall">Wall</Link>
        {user ? (
          <>
            <Link to="/update-profile">Update Profile</Link>
            <button className="auth-btn" onClick={redirectOnLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="auth-btn">Login</button>
            </Link>
          </>
        )}
      </ul>
    </nav>
  );
};
export default Nav;
