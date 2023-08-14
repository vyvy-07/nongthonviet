import React from "react";
import { Link } from "react-router-dom";
import { PATH } from "../constants/path";

const BoxsItem = ({
  className,
  date__time = true,
  desc_e = false,
  featuredImage,
  excerpt,
  category,
  sapo,
  alias,
  title,
}) => {
  return (
    <div className={`boxs__item ${className}`}>
      <Link
        to={PATH.NEWS_DETAIL.replace(":alias", alias)}
        className="boxs__item-img"
      >
        <img className="img" src={featuredImage || "img/banner2.jpg"} alt="" />
      </Link>
      <div className="boxs__item-info">
        <h1 className="heading-h3">
          <Link to={PATH.NEWS_DETAIL.replace(":alias", alias)}>
            {excerpt || title || ""}
          </Link>
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
