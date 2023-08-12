import React from "react";

const BoxsItem = ({
  className,
  date__time = true,
  desc_e = false,
  featuredImage,
  excerpt,
  category,
}) => {
  return (
    <div className={`boxs__item ${className}`}>
      <a href="#" className="boxs__item-img">
        <img
          className="img"
          src={featuredImage ? featuredImage : "img/banner2.jpg"}
          alt=""
        />
      </a>
      <div className="boxs__item-info">
        <h1 className="heading-h3">
          <a href="#">{excerpt}</a>
        </h1>
        {date__time && (
          <div className="date dflex fs13">
            <p className="date__time">12:02 23/23/2012</p>
            <a className="list fs13 grey9" href="#">
              {category?.categoryName}
            </a>
          </div>
        )}
        {desc_e && <p className="description">{sapo}</p>}
      </div>
    </div>
  );
};

export default BoxsItem;
