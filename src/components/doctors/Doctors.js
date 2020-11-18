import React, { Component } from "react";
import DoctorList from "./DoctorList";

class Doctors extends Component {
  state = {
    doctors: [],
  };

  render() {
    return (
      <div className="container-fluid">
        <DoctorList />
      </div>
    );
  }
}

export default Doctors;
