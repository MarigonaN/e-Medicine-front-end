import React, { Component } from "react";
import { FaHospitalAlt } from "react-icons/fa";
import { FaUserNurse } from "react-icons/fa";
import { MdLocalPharmacy } from "react-icons/md";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
class Services extends Component {
  render() {
    return (
      <div className="container services" style={{ paddingTop: "70px" }}>
        <div className="text-center">
          <h2
            id="A1"
            className="section-heading text-uppercase mt-5 "
            style={{ marginBottom: "100px", fontFamily: "cursive" }}
          >
            Services
          </h2>
        </div>

        <Row className=" text-center mt-3">
          <Col md={4} id="A2">
            <Link to="/pharmacy">
              {" "}
              <MdLocalPharmacy
                id="pharmacy"
                style={{ fontSize: "150px", color: "black" }}
              />
            </Link>
            <h4 className="my-3">Pharmacy</h4>
            <p className="text-muted">
              As the pharmacy profession and attitudes toward it evolve,
              pharmacists are at the forefront of many important issues,
              including drug safety, affordable health care, and customer
              service.As a pharmacist, you are an important person in your
              community. Your patients trust you to take care of their health.
              Be sure to consider the impact that your professional decisions
              and conduct online and outside of work could have on your
              reputation as a community health care professional.
            </p>
          </Col>
          <Col md={4} id="A3">
            <Link to="/login">
              <FaHospitalAlt
                id="hospital"
                style={{ fontSize: "150px", color: "black" }}
              />
            </Link>
            <h4 className="my-3">Hospital</h4>
            <p className="text-muted">
              Dedicated to health care, hospitals are the healing centers for a
              host of diseases and other physical & mental conditions. With
              specialized staff to look into specific concerns and great
              ambiances, today’s hospitals are known for their hospitality. In
              addition, the immensely responsible hospital staff make hospitals
              more than just a house for the sick. They have developed
              themselves to cure most of the diseases, thus helping out the
              mankind.
            </p>
          </Col>
          <Col md={4} id="A4">
            <Link to="/todos">
              <FaUserNurse
                id="doctor"
                style={{ fontSize: "150px", color: "black" }}
              />
            </Link>
            <h4 className="my-3">Doctors</h4>
            <p className="text-muted">
              Death is the enemy. But the enemy has superior forces. Eventually,
              it wins. And, in a war that you cannot win, you don't want a
              general who fights to the point of total annihilation. You want
              good doctors, someone who knows how to fight for territory that
              can be won and how to surrender it when it can't, someone who
              understands that the damage is greatest if all you do is battle to
              the bitter end.
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Services;
