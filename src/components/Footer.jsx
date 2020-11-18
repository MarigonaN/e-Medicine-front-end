import React, { Component } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

import "./Contact.css";
class Footer extends Component {
  render() {
    return (
      <div className="container">
        <footer className="footer py-4">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-3 text-lg-left">
                Copyright © Marigona Nuhija 2020
              </div>
              <div className="col-lg-6 my-3 my-lg-0">
                <a
                  className="btn btn-dark btn-social mx-2"
                  id="button"
                  href="https://github.com/MarigonaN"
                  target="_blank"
                >
                  <AiFillGithub />
                </a>
                <a
                  className="btn btn-dark btn-social mx-2"
                  id="button"
                  href="https://www.linkedin.com/in/marigona-nuhija-02275a173/"
                  target="_blank"
                >
                  <AiFillLinkedin />
                </a>
                <a
                  className="btn btn-dark btn-social mx-2"
                  id="button"
                  href="https://mail.google.com/mail/u/0/#inbox"
                  target="_blank"
                >
                  <SiGmail />
                </a>
              </div>
              <div className="col-lg-3 text-lg-right">
                <a
                  className="mr-3"
                  href="/"
                  style={{ color: "grey", textDecoration: "none" }}
                >
                  Privacy Policy
                </a>
                <a href="/" style={{ color: "grey", textDecoration: "none" }}>
                  Terms of Use
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
