import React from "react";
import { Link } from "react-router-dom";
import { PATH } from "../../constants/path";

const DetailPage = () => {
  return (
    <>
      <Link
        to={PATH.NEWS_DETAIL.replace(
          "/:alias",
          "/radio--ha-noi-tinh-ha-noi-que"
        )}
      >
        radio--ha-noi-tinh-ha-noi-que
      </Link>
      <Link to="/">link</Link>
    </>
  );
};

export default DetailPage;
