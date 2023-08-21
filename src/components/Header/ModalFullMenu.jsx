import React from "react";

const ModalFullMenu = ({ isModal, setIsModal, listCategory }) => {
  return (
    <div className={`modal-fullmenu ${isModal && "active"}`}>
      <div className="container">
        <div className="btn-close" onClick={() => setIsModal(false)}>
          <span className>Đóng</span>
          <img src="/img/btn-close.svg" alt="" />
        </div>
        {listCategory?.length > 0 &&
          listCategory?.map((item, index) => {
            return (
              <ul className="headermidle__categories" key={item?.id || index}>
                <li className="nav-item">
                  <a className="categories-item" href="#">
                    {item?.name}
                  </a>
                </li>

                {item?.subCates?.length > 0 &&
                  item?.subCates?.map((sub, index) => {
                    return (
                      <li className="item" key={sub?.id || index}>
                        <a className="categories-item" href="#">
                          {sub?.name}
                        </a>
                      </li>
                    );
                  })}
              </ul>
            );
          })}
      </div>
    </div>
  );
};

export default ModalFullMenu;
