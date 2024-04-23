import React from "react";
import "./Gif.css";
import plus from "../assets/plus.png";

const Gif = () => {
  return (
    <div className="container">
      <div className="header">
        <p>
          Ah!!, I never saw someone from your <br />
          Company.{" "}
        </p>
      </div>
      <hr />
      <div className="circle-container">
        <div className="circle">
        </div>
        <p>Welcome!!</p>

      </div>
      <div className="clickables">
        <button className="btn-1">
          <p>Browse Test Data</p>
        </button>
        <button className="btn-2">
          <img src={plus} alt="" />
          <p>Connect Domain</p>
        </button>
      </div>

      <div className="footer">
        <p>
          **Tenant Connections are not allowed in free tier, however you can
          still explore the website features.
        </p>
      </div>
    </div>
  );
};

export default Gif;
