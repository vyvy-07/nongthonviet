import React from "react";

const Banner = ({ label, classname }) => {
  return (
    <div className="banner">
      <h2 className={classname}>{label}</h2>
      <img src="assets/img/banner.jpg" alt="NongThonViet" />
    </div>
  );
};

export default Banner;
