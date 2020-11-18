import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthService from "../services/AuthService";
import { AuthContext } from "../context/AuthContext";
import { Navbar, Nav } from "react-bootstrap";
import "./Navbar.css";

const Navbarr = (props) => {
  const { isAuthenticated, user, setIsAuthenticated, setUser } = useContext(
    AuthContext
  );

  const onClickLogoutHandler = () => {
    AuthService.logout().then((data) => {
      if (data.success) {
        setUser(data.user);
        setIsAuthenticated(false);
      }
    });
  };

  const unauthenticatedNavbar = () => {
    return (
      <div className="container-fluid">
        <Navbar bg="transparent" variant="transparent">
          <img
            src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/15/4097908015_46ee0ad4-45ff-4c70-9a0e-48f1c172bf9d.png?cb=1605046547"
            alt="logo"
            style={{ width: "180px", marginRight: "50px" }}
          ></img>
          <Nav className="mr-auto">
            <Link
              to="/"
              className="active"
              id="button"
              style={{ color: "white", fontWeight: "bold" }}
            >
              <li>Home</li>
            </Link>
            <Link
              to="/Covid19"
              className="active"
              id="button"
              style={{ color: "white", fontWeight: "bold" }}
            >
              <li>Covid19</li>
            </Link>
          </Nav>

          <Link to="/login">
            <li
              href="#login"
              id="button"
              style={{ color: "white", fontWeight: "bold" }}
            >
              Login
            </li>
          </Link>

          <Link to="/register">
            <li
              href="#register"
              id="button"
              style={{ color: "white", fontWeight: "bold" }}
            >
              Register
            </li>
          </Link>
        </Navbar>
      </div>
    );
  };

  const authenticatedNavbar = () => {
    return (
      <div className="container-fluid">
        <Navbar bg="transparent" variant="transparent" className="nav">
          <img
            src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/15/4097908015_46ee0ad4-45ff-4c70-9a0e-48f1c172bf9d.png?cb=1605046547"
            style={{ width: "180px", marginRight: "50px" }}
          ></img>

          <Nav className="mr-auto">
            <Link
              to="/"
              className="active"
              id="button"
              style={{ color: "white", fontWeight: "bold" }}
            >
              <li>Home</li>
            </Link>

            <Link
              to="/todos"
              id="button"
              href="#doctors"
              style={{ color: "white", fontWeight: "bold" }}
            >
              <li>Doctors</li>
            </Link>
            <Link
              to="/pharmacy"
              id="button"
              href="#pharmacy"
              style={{ color: "white", fontWeight: "bold" }}
            >
              <li>Pharmacy</li>
            </Link>
          </Nav>
          {user.role === "admin" ? (
            <Link to="/admin">
              <li className="active" href="#admin" id="button">
                Admin
              </li>
            </Link>
          ) : null}
          <Link to="/">
            <li>
              <button
                type="button"
                className="btn btn-link nav-link"
                id="button"
                onClick={onClickLogoutHandler}
                style={{ color: "white", fontWeight: "bold" }}
              >
                Logout
              </button>
            </li>
          </Link>
        </Navbar>
      </div>
    );
  };
  return (
    <header className="container-fluid">
      <div className="overlay">
        <ul>
          {!isAuthenticated ? unauthenticatedNavbar() : authenticatedNavbar()}
        </ul>

        <br></br>
        <h1
          className="mt-5"
          style={{
            paddingTop: "30px",
            paddingBottom: "50px",
            color: "whitesmoke",
            fontSize: "8vh",
            fontWeight: "bolder",
            fontFamily: "cursive",
          }}
        >
          Simply The Best
        </h1>
      </div>
    </header>
  );
};

export default Navbarr;
