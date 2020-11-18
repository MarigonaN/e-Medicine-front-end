import React, { useState } from "react";
import DoctorData from "./doctors.json";
import Modal from "react-modal";
import { Row, Col } from "react-bootstrap";
import { BiPlusMedical } from "react-icons/bi";
import "./DoctorList.scss";
Modal.setAppElement("#root");
function DoctorList() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [doctorIndex, setDoctorIndex] = useState(0);
  return (
    <div className="container">
      <h3
        className="display-4 mt-5 mb-5"
        style={{ fontFamily: "cursive", textAlign: "center" }}
      >
        Doctors
      </h3>

      <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3">
        {DoctorData.map((doctorDetail, index) => {
          console.log("doctorDetail", doctorDetail);
          return (
            <div className="container" key={doctorDetail._id}>
              <Col md={12}>
                <img
                  src={doctorDetail.picture}
                  alt="doctor"
                  className="image"
                  style={{ width: "250px" }}
                ></img>
                <p>
                  {doctorDetail.name.first} {doctorDetail.name.last} &diams;
                  {doctorDetail.title}
                </p>
                <p className="middle">
                  <BiPlusMedical
                    onClick={() => (
                      setModalIsOpen(true), setDoctorIndex(index)
                    )}
                    className="text"
                    size="50px"
                  />
                </p>
              </Col>
            </div>
          );
        })}
      </Row>

      <Modal
        id="modal"
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "#404040",
          },
          content: {
            color: "white",
          },
        }}
      >
        <h2 className="display-4 text-center">Welcome to my About</h2>
        <hr style={{ borderTop: "1px solid white", marginBottom: "50px" }}></hr>
        <Row xs={2} md={2}>
          <Col md={6}>
            <Col className="d-inline-flex">
              <p
                className="mr-1"
                id="showcaseName"
              >{`${DoctorData[doctorIndex].greeting}`}</p>
              <h3 id="showcaseName">
                {" "}
                {` ${DoctorData[doctorIndex].name.first} ${DoctorData[doctorIndex].name.last}, ${DoctorData[doctorIndex].age}years old`}
              </h3>
            </Col>

            <Col>
              <p id="showcaseName1">{`Job title: ${DoctorData[doctorIndex].title}`}</p>
              <p id="showcaseName2">{`Company: ${DoctorData[doctorIndex].company}`}</p>
            </Col>
            <Col style={{ textAlign: "justify", lineHeight: "0" }}>
              <h4 id="showcaseName3">Contact</h4>

              <p id="showcaseName3">{`E-mail: ${DoctorData[doctorIndex].email}`}</p>
              <p id="showcaseName4">{`Phone: ${DoctorData[doctorIndex].phone}`}</p>
              <p id="showcaseName5">{`Address: ${DoctorData[doctorIndex].address}`}</p>
            </Col>
            <Col id="showcaseName5">
              <h4>About</h4>
              <p>{` ${DoctorData[doctorIndex].about}`}</p>
            </Col>
            <p className="text-muted">
              Registered{` ${DoctorData[doctorIndex].registered}`}
            </p>
          </Col>
          <Col md={6}>
            <img
              id="imageRadius"
              src={`${DoctorData[doctorIndex].picture}`}
              alt="doctor"
              style={{ width: "100%", height: "100%" }}
            />
          </Col>
        </Row>
        <Row>
          <Col className="text-lg-right mt-3">
            <button
              className="btn btn-lg btn-block"
              id="showcase4"
              onClick={() => setModalIsOpen(false)}
            >
              Close
            </button>
          </Col>
        </Row>
      </Modal>
    </div>
  );
}

export default DoctorList;
