import React from "react";
import ModalFullMenu from "../Header/ModalFullMenu";
import { Link } from "react-router-dom";
import { PATH } from "../../constants/path";
import { usePage } from "../../hooks/useContext";
const Headermidle = ({ nav = true, heading = true, label = "" }) => {
  const { headerMidle } = usePage() || {};
  const { listCategory, onChangeModal, setIsModal, isModal } =
    headerMidle || {};
  return (
    <div>
      <div className="headermidle">
        <div className="container">
          <div className="headermidle__topic b-tb">
            <div className="headermidle__topic-icon" onClick={onChangeModal}>
              <img src="/img/nav3.svg" alt="" />
            </div>
            <div className="headermidle__topic-title">
              <h3 className="heading-h3">CÂU CHUYỆN TIÊU ĐIỂM:</h3>
              <h3 className="heading-h2">
                NÔNG NGHIỆP TUẦN HOÀN TỪ NÔNG DÂN SINH THÁI
                {label}
              </h3>
              <h3 className="heading-h2">{label}</h3>
            </div>
            <div className="headermidle__topic-search">
              <input
                className="search pd09"
                placeholder="Search..."
                type="text"
              />
              <img
                className="headermidle__search-icon pd09"
                src="/img/iconsearch.svg"
                alt=""
              />
            </div>
          </div>
          {heading && (
            <div className="headermidle__heading p-tb12 bbt4">
              <h1 className="heading-h1 tcenter">KINH TẾ XANH</h1>
            </div>
          )}
          {nav && (
            <ul className="headermidle__categories b-bt dflex">
              {listCategory?.length > 0 &&
                listCategory?.slice(0, 6).map((item, index) => {
                  return (
                    <li className="nav-item" key={item?.id || index}>
                      <Link
                        to={PATH.DETAIL_PAGE.replace(":alias", item?.alias)}
                        className="categories-item"
                      >
                        {item?.name}
                      </Link>
                      <ul className="submenu">
                        {item?.subCates?.map((sub, index) => {
                          return (
                            <li className="nav-item" key={sub?.id || index}>
                              <Link
                                to={PATH.DETAIL_PAGE.replace(
                                  ":alias",
                                  sub?.alias
                                )}
                                className="categories-item"
                              >
                                {sub?.name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                })}
            </ul>
          )}
        </div>
      </div>
      <ModalFullMenu {...headerMidle} />
    </div>
  );
};

export default Headermidle;
