import React from "react";
import { Link } from "react-router-dom";
import { PATH } from "../constants/path";
import HLSPlayer from "react-hls";

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
  featuredMedia,
  classTitle = "",
  postMedia,
}) => {
  return (
    <div className={`boxs__item ${className}`}>
      {featuredMedia?.uri ? (
        <Link to={`/news-detail/${alias}`} className="boxs__item-img">
          <video
            className="img"
            src={`${featuredMedia?.uri}?autoplay=1` || []}
            alt={featuredMedia?.alt}
            autoPlay
            muted
            loop
            controls
          ></video>
        </Link>
      ) : (
        <Link to={`/news-detail/${alias}`} className="boxs__item-img">
          <img className="img" src={featuredImage || "img/banner2.jpg"} />
        </Link>
      )}
      <div className="boxs__item-info" style={{ minHeight: "92px" }}>
        <h1 className="heading-h3">
          <Link className={classTitle} to={`/news-detail/${alias}`}>
            {title || ""}
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
        {desc_e && <p className="description ">{sapo}</p>}
      </div>
    </div>
  );
};

export default BoxsItem;
