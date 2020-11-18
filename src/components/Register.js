import React, { useState, useRef, useEffect } from "react";
import AuthService from "../services/AuthService";
import Message from "./Message";
import "./Register.css";
import { Link } from "react-router-dom";

import { Row, Col } from "react-bootstrap";
const Register = (props) => {
  const [user, setUser] = useState({ username: "", password: "", role: "" });
  const [message, setMessage] = useState(null);
  let timerID = useRef(null);

  useEffect(() => {
    return () => {
      clearTimeout(timerID);
    };
  }, []);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setUser({ username: "", password: "", role: "" });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    AuthService.register(user).then((data) => {
      const { message } = data;
      setMessage(message);
      resetForm();
      if (!message.msgError) {
        timerID = setTimeout(() => {
          props.history.push("/login");
        }, 2000);
      }
    });
  };
  return (
    <div className="container-fluid">
      <Row>
        <Col md={6} className="left-side box">
          <img
            className="mt-5"
            id="imageRotate"
            src="https://www.vippng.com/png/detail/344-3440080_colorful-abstract-triangle-pattern-png-and-vector-orange.png"
            alt="imgRotate"
            style={{ width: "550px", backgroundColor: "transparent" }}
          />
          <h1 className="display-1 ml-5" id="showcase">
            Join Us
          </h1>

          <h3 className="display-5 ml-5" id="showcase2">
            Happy to have you here!<span>❤️</span>
          </h3>
        </Col>
        <Col md={6}>
          <div
            className="wrapper"
            id="showcase3"
            style={{ backgroundColor: "#3CB371" }}
          >
            <div className="title">Register Here</div>
            <hr
              style={{ borderTop: "1px solid white", marginBottom: "50px" }}
            ></hr>

            <form onSubmit={onSubmit}>
              <div class="input_field">
                <label htmlFor="username" className="sr-only input ">
                  Username:
                </label>

                <input
                  type="text"
                  name="username"
                  value={user.username}
                  onChange={onChange}
                  className="form-control"
                  placeholder="Enter Username"
                />
              </div>
              <label htmlFor="password" className="sr-only">
                {" "}
                Password:{" "}
              </label>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={onChange}
                className="form-control mt-1"
                placeholder="Enter Password"
              />
              <label htmlFor="role" className="sr-only">
                {" "}
                Role:{" "}
              </label>
              <input
                type="text"
                name="role"
                onChange={onChange}
                className="form-control mt-1"
                placeholder="Enter role (user)"
              />
              <button
                className="btn btn-lg btn-block"
                id="showcase4"
                type="submit"
              >
                Register
              </button>
            </form>
            {message ? <Message message={message} /> : null}
            <Link to="/login" style={{ textDecoration: "none" }}>
              {" "}
              <h5
                style={{
                  color: "white",
                  paddingTop: "20px",
                }}
              >
                Already have an account. Log in here!!!
              </h5>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Register;
