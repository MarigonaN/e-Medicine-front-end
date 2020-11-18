import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthService from "../services/AuthService";
import { AuthContext } from "../context/AuthContext";
import { Navbar, Nav } from "react-bootstrap";
import "./SecondNavbar.css";
const SecondNavbar = (props) => {
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

  const authenticatedNavbar = () => {
    return (
      <div className="container-fluid">
        <Navbar bg="transparent" variant="transparent">
          <Link to="/">
            <img
              src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/15/4097908015_46ee0ad4-45ff-4c70-9a0e-48f1c172bf9d.png?cb=1605046547"
              alt="logo"
              style={{ width: "180px", marginRight: "50px" }}
            ></img>
          </Link>
          <Nav className="mr-auto">
            <Link
              to="/"
              href="#home"
              id="button"
              style={{
                color: "white",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              <li> Home</li>
            </Link>

            <Link
              to="/todos"
              id="button"
              href="#doctors"
              style={{
                color: "white",
                fontWeight: "bold",
                backgroundColor: "",
              }}
            >
              <li className="active"> Doctors</li>{" "}
            </Link>
            <Link
              to="/pharmacy"
              id="button"
              href="#pharmacy"
              style={{
                color: "white",
                fontWeight: "bold",
                backgroundColor: "",
              }}
            >
              <li> Pharmacy</li>{" "}
            </Link>
          </Nav>
          {user.role === "admin" ? (
            <Link to="/admin">
              <li
                className="active"
                id="button"
                href="#admin"
                style={{ color: "white", fontWeight: "bold" }}
              >
                Admin
              </li>
            </Link>
          ) : null}{" "}
          <Link to="/">
            <button
              type="button"
              id="button"
              className="btn btn-link nav-link"
              onClick={onClickLogoutHandler}
              style={{
                color: "white",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Logout
            </button>
          </Link>
        </Navbar>
      </div>
    );
  };

  return (
    <div className="container-fluid">
      <div className="overlay1">
        <ul>
          {!isAuthenticated ? authenticatedNavbar() : authenticatedNavbar()}
        </ul>
      </div>
    </div>
  );
};

export default SecondNavbar;
