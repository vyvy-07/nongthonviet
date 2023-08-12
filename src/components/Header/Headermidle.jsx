import React from "react";
import ModalFullMenu from "./ModalFullMenu";
const Headermidle = ({ headerMidle }) => {
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
              </h3>
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
          <div className="headermidle__heading p-tb12 bbt4">
            <h1 className="heading-h1 tcenter">KINH TẾ XANH</h1>
          </div>
          <ul className="headermidle__categories b-bt dflex">
            {listCategory?.length > 0 &&
              listCategory?.slice(0, 6).map((item, index) => {
                return (
                  <li className="nav-item" key={item?.id || index}>
                    <a className="categories-item" href="#">
                      {item?.name}
                    </a>
                    <ul className="submenu">
                      {item?.subCates?.map((sub, index) => {
                        return (
                          <li className="nav-item" key={sub?.id || index}>
                            <a className="categories-item" href="#">
                              {sub?.name}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
      <ModalFullMenu {...headerMidle} />
    </div>
  );
};

export default Headermidle;
