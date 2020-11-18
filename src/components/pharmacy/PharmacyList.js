import React, { useState } from "react";
import PharmacyData from "./pharmacy.json";
import Modal from "react-modal";
import { Row, Col } from "react-bootstrap";
import { BiPlusMedical } from "react-icons/bi";

Modal.setAppElement("#root");
function PharmacyList() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [pharmacyIndex, setPharmacyIndex] = useState(0);
  return (
    <div className="container">
      <h3
        className="display-4 mt-5 mb-5"
        style={{ fontFamily: "cursive", textAlign: "center" }}
      >
        Pharmacy
      </h3>

      <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3">
        {PharmacyData.map((PharmacyDetail, index) => {
          console.log("PharmacyDetail", PharmacyDetail);
          return (
            <div className="container" key={PharmacyDetail._id}>
              <Col md={12}>
                <img
                  src={PharmacyDetail.image}
                  alt="pharmacy"
                  className="image"
                  style={{ width: "250px" }}
                ></img>
                <p>{PharmacyDetail.name}</p>
                <p className="middle">
                  <BiPlusMedical
                    onClick={() => (
                      setModalIsOpen(true), setPharmacyIndex(index)
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
            backgroundColor: "grey",
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
              <h3 id="showcaseName">
                {" "}
                {` ${PharmacyData[pharmacyIndex].name}`}
              </h3>
            </Col>

            <Col style={{ textAlign: "justify", lineHeight: "0" }}>
              <h4 id="showcaseName2">Contact</h4>

              <p id="showcaseName3">{`E-mail: ${PharmacyData[pharmacyIndex].contactPoint.telephone}`}</p>

              <p id="showcaseName4">{`Address: ${PharmacyData[pharmacyIndex].address.streetAddress} ${PharmacyData[pharmacyIndex].address.addressLocality} ${PharmacyData[pharmacyIndex].address.addressRegion}`}</p>
            </Col>
            <Col id="showcaseName5">
              <h4>About</h4>
              <p>{` ${PharmacyData[pharmacyIndex].description}`}</p>
            </Col>
            <p className="text-muted">
              Working Hours{` ${PharmacyData[pharmacyIndex].openingHours}`}
            </p>
            <p className="text-muted">
              Registered{` ${PharmacyData[pharmacyIndex].registered}`}
            </p>
          </Col>

          <Col md={6}>
            <img
              id="imageRadius"
              src={`${PharmacyData[pharmacyIndex].image}`}
              alt="pharmacy"
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

export default PharmacyList;
