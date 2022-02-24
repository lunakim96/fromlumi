import React from "react";

const Button = () => {
  return (
    <div id="grid">
      <a href="https://hey.hydragun.com/fromlumi">
        <div className="square">
          <h5 className="heading">Hydragun</h5>
          <p className="description">Use "FROMLUMI" for extra $10 off</p>
        </div>
      </a>
      <a href="https://www.gainful.com/r/qief4v">
        <div className="square">
          <h5 className="heading">Favorite Protein Powder</h5>
          <p className="description">50% off Gainful Protein</p>
        </div>
      </a>
      <a href="http://rwrd.io/6rxl1k1?c">
        <div className="square">
          <h5 className="heading">FLO Vitamin</h5>
          <p className="description">$10 off PMS gummies</p>
        </div>
      </a>
      <a href="https://amzn.to/3vlvVRE">
        <div className="square">
          <h5 className="heading">My InBody Scale</h5>
          <p className="description">Body Composition Scale</p>
        </div>
      </a>
    </div>
  );
};

export default Button;
