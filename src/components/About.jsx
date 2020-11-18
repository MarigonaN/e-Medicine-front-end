import React, { Component } from "react";
import "./About.css";
class About extends Component {
  render() {
    return (
      <>
        <div
          className="container mt-5"
          id="fadex"
          style={{ paddingTop: "80px", paddingBottom: "50px" }}
        >
          <div className="text-center">
            <h2
              className=" text-uppercase"
              style={{ marginBottom: "100px", fontFamily: "cursive" }}
            >
              About
            </h2>
          </div>
          <ul className=" timeline mt-5">
            <li className="timeline-inverted1">
              <div className="timeline-image1" id="hoverr">
                <img className="rounded-circle img-fluid" src="" alt="" />
              </div>
              <div className=" timeline-panel1 vl">
                <div>
                  <h4>November 2020</h4>
                  <h4>End of this Web</h4>
                </div>

                <div>
                  <p className="text-muted">
                    My name is Marigona. I am a web developer. My goal in
                    building this website is to make it easier for people to
                    find the nearest professional doctors, pharmacies and
                    hospitals. I hope you find this web usable!!!
                  </p>
                </div>
              </div>
            </li>
            <li className="vl3"></li>
            <li className="timeline-inverted2">
              <div className="timeline-image2" id="hoverr">
                <img className="rounded-circle img-fluid" src="" alt="" />
              </div>
              <div className="timeline-panel2 ">
                <div>
                  <h4>April 2020</h4>
                  <h4>My Best Decision in life</h4>
                </div>
                <div>
                  <p className="text-muted">
                    And ... it all started here. The place that made me call
                    myself a web developer. The place where the desire and will
                    to learn is never lost. Happy to be part of this 6-month
                    challenge.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default About;
