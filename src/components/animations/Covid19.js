import { render } from "react-dom";
import React, { useState, useCallback } from "react";
import { useTransition, animated } from "react-spring";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Covid19.css";

const pages = [
  ({ style }) => (
    <animated.div style={{ ...style, background: "lightpink" }}>
      <Col className="d-inline-flex " style={{ fontSize: "80px" }}>
        <p id="animation">C</p>
        <p id="animation1">L</p>
        <p id="animation2">I</p>
        <p id="animation3">C</p>
        <p id="animation4">K</p>

        <p id="animation5">M</p>
        <p id="animation6">E</p>
        <p id="animation7">!</p>
        <p id="animation8">!</p>
        <p id="animation9">!</p>
      </Col>
      <Col>
        <h3 id="animation7">
          This site is dedicated to the covid19, in order to raise awareness of
          this virus.
        </h3>
      </Col>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, background: "lightblue" }}>
      {" "}
      <img
        src="https://www.who.int/images/default-source/health-topics/coronavirus/fifa-who-step-1.png?sfvrsn=4d9b931f_1"
        style={{ height: "50%" }}
      />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, background: "#BA55D3" }}>
      <img
        src="https://pbs.twimg.com/media/ESQ32f-UEAEVgPR.jpg"
        style={{ height: "50%" }}
      />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, background: "lightgreen" }}>
      <img
        src="https://myindiandoubtz.in/wp-content/uploads/2020/07/Vietnamese-Animated-Pop-Coronavirus-Song.png"
        style={{ height: "50%" }}
      />
    </animated.div>
  ),
];

export default function Covid19() {
  const [index, set] = useState(0);
  const onClick = useCallback(() => set((state) => (state + 1) % 4), []);
  const transitions = useTransition(index, (p) => p, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });
  return (
    <div
      className="container-fluid"
      style={{
        paddingRight: "0px !important",
        paddingLeft: "0px !important",
      }}
    >
      <Link
        to="/"
        className="active"
        style={{
          color: "lightpink",
          fontWeight: "bold",
          marginLeft: "50%",
          fontSize: "24px",
          fontWeight: "bolder",
          textDecoration: "none",
        }}
      >
        Home
      </Link>

      <div className="simple-trans-main" onClick={onClick}>
        {transitions.map(({ item, props, key }) => {
          const Page = pages[item];
          return <Page key={key} style={props} />;
        })}
      </div>
    </div>
  );
}
