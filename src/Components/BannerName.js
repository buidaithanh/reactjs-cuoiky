import React from "react";
import { Link } from "react-router-dom";

function BannerName({ name, discount, link }) {
  return (
    <div className="bannerContent">
      <h3>Hello {name}</h3>
      <p>
      Introduction to fast food restaurant 
      </p>
      <Link to={link}>Learn More</Link>
    </div>
  );
}

export default BannerName;
