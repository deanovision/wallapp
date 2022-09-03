import { useRef, useEffect } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuthorizer } from "@authorizerdev/authorizer-react";
import { Menu2 } from "tabler-icons-react";
import Logo from "./Logo";
const Nav = () => {
  const { logout, user } = useAuthorizer();
  const navigate = useNavigate();
  const menuRef = useRef();
  const burgerRef = useRef();
  const redirectOnLogout = () => {
    logout();
    navigate("../login");
  };
  useEffect(() => {
    menuRef.current.style.display = "";
    const clickOutsideHandler = (event) => {
      if (
        !menuRef.current.contains(event.target) &&
        !burgerRef.current.contains(event.target)
      ) {
        menuRef.current.style.display = "";
      }
    };
    document.addEventListener("click", clickOutsideHandler);
    return () => {
      document.removeEventListener("click", clickOutsideHandler);
    };
  });
  function toggleMenu() {
    menuRef.current.style.display === ""
      ? (menuRef.current.style.display = "flex")
      : (menuRef.current.style.display = "");
  }
  return (
    <>
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
      <div className="nav-bar-container">
        <Logo className="logo" />
        {user ? (
          <>
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
        <nav className="nav-bar-mobile" ref={menuRef}>
          <ul className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/wall">Wall</Link>
            {user ? (
              <>
                <Link to="/update-profile">Update Profile</Link>
              </>
            ) : null}
          </ul>
        </nav>
      </div>
      <div ref={burgerRef}>
        <Menu2
          className="burger"
          size={40}
          color="white"
          onClick={toggleMenu}
        />
      </div>
    </>
  );
};
export default Nav;
