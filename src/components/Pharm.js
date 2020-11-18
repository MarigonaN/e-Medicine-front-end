import React, { useState } from "react";
import PharmItem from "./PharmItem";
import Pharmacy from "./pharmacy/Pharmacy";
import SecondNavbar from "./SecondNavbar";
import Footer from "./Footer";

const Pharm = (props) => {
  const [setPharm] = useState({ name: "" });
  const [pharms] = useState([]);

  return (
    <div>
      <SecondNavbar />

      <Pharmacy />
      <div>
        <div style={{ color: "black", marginLeft: "20px", marginTop: "20px" }}>
          {pharms.map((pharm) => {
            return <PharmItem key={pharm._id} pharm={pharm} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pharm;
