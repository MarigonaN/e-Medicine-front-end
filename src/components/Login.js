import React, { useState, useContext } from "react";
import AuthService from "../services/AuthService";
import Message from "../components/Message";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
const Login = (props) => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [message, setMessage] = useState(null);
  const authContext = useContext(AuthContext);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    AuthService.login(user).then((data) => {
      console.log(data);
      const { isAuthenticated, user, message } = data;
      if (isAuthenticated) {
        authContext.setUser(user);
        authContext.setIsAuthenticated(isAuthenticated);
        props.history.push("/");
      } else setMessage(message);
    });
  };
  return (
    <div className="container-fluid " id="login">
      <Row col-sm-1 col-md-1>
        <Col md={8}>
          <div className="wrapper1" id="showcaseLogin">
            <form onSubmit={onSubmit}>
              <h3 className="title">Please sign in</h3>
              <hr
                style={{ borderTop: "1px solid white", marginBottom: "50px" }}
              ></hr>
              <label htmlFor="username" className="sr-only">
                {" "}
                Username:{" "}
              </label>
              <input
                type="text"
                name="username"
                onChange={onChange}
                className="form-control"
                placeholder="Enter Username"
              />
              <label htmlFor="password" className="sr-only">
                {" "}
                Password:{" "}
              </label>
              <input
                type="password"
                name="password"
                onChange={onChange}
                className="form-control mt-3"
                placeholder="Enter Password"
              />
              <button
                className="btn btn-lg btn-block"
                type="submit"
                id="showcase4"
              >
                Log in
              </button>
            </form>

            {message ? <Message message={message} /> : null}
            <Link to="/register" style={{ textDecoration: "none" }}>
              {" "}
              <h5
                style={{
                  color: "white",
                  paddingTop: "20px",
                }}
              >
                I don't have an account. Register here!!!
              </h5>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Login;
