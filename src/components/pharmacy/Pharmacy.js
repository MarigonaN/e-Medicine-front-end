import React, { Component } from "react";
import PharmacyList from "./PharmacyList";
class Pharmacy extends Component {
  state = {
    pharmacies: [],
  };

  render() {
    return (
      <>
        <PharmacyList />
      </>
    );
  }
}

export default Pharmacy;
