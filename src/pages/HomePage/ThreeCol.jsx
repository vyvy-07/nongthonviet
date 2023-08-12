import React from "react";

const ThreeCol = ({ classname = true }) => {
  return (
    <section className="threeCol">
      <div className="container">
        <div className={`sctitle ${classname && "p-t32"}`}>
          <h2 className="heading fs22 ffb">NÔNG NGHIỆP 360</h2>
        </div>
        <div className="gridcol p-tb32">
          <div className="boxs__item --boxs-m --boxs-xl">
            <a href="#" className="boxs__item-img">
              <img className="img" src="img/banner2.jpg" alt="" />
            </a>
            <div className="boxs__item-info">
              <h1 className="heading-h1 ffb">
                <a href="#">
                  Dự thảo Luật Đất đai sửa đổi: Cần giải phóng, sử dụng hiệu quả
                  hơn đất nông nghiệp
                </a>
              </h1>
              <div className="date dflex fs13">
                <p className="date__time">12:02 23/23/2012</p>
                <a className="list fs13 grey9" href="#">
                  DANH MỤC
                </a>
              </div>
            </div>
          </div>
          <div className="boxs --boxs-sm">
            <div className="boxs__item">
              <a href="#" className="boxs__item-img">
                <img className="img" src="img/banner2.jpg" alt="" />
              </a>
              <div className="boxs__item-info">
                <h1 className="heading-h3">
                  <a href="#">
                    Dự thảo Luật Đất đai sửa đổi: Cần giải phóng, sử dụng hiệu
                    quả hơn đất nông nghiệp
                  </a>
                </h1>
              </div>
            </div>
            <div className="boxs__item">
              <a href="#" className="boxs__item-img">
                <img className="img" src="img/banner2.jpg" alt="" />
              </a>
              <div className="boxs__item-info">
                <h1 className="heading-h3">
                  <a href="#">
                    Dự thảo Luật Đất đai sửa đổi: Cần giải phóng, sử dụng hiệu
                    quả hơn đất nông nghiệp
                  </a>
                </h1>
              </div>
            </div>
          </div>
          <div className="boxs --boxs-xs">
            <div className="boxs__item">
              <a href="#" className="boxs__item-img">
                <img className="img" src="img/banner2.jpg" alt="" />
              </a>
              <div className="boxs__item-info">
                <h1 className="heading-h3">
                  <a href="#">
                    Dự thảo Luật Đất đai sửa đổi: Cần giải phóng, sử dụng hiệu
                    quả hơn đất nông nghiệp
                  </a>
                </h1>
              </div>
            </div>
            <div className="boxs__item">
              <a href="#" className="boxs__item-img">
                <img className="img" src="img/banner2.jpg" alt="" />
              </a>
              <div className="boxs__item-info">
                <h1 className="heading-h3">
                  <a href="#">
                    Dự thảo Luật Đất đai sửa đổi: Cần giải phóng, sử dụng hiệu
                    quả hơn đất nông nghiệp
                  </a>
                </h1>
              </div>
            </div>
            <div className="boxs__item">
              <a href="#" className="boxs__item-img">
                <img className="img" src="img/banner2.jpg" alt="" />
              </a>
              <div className="boxs__item-info">
                <h1 className="heading-h3">
                  <a href="#">
                    Dự thảo Luật Đất đai sửa đổi: Cần giải phóng, sử dụng hiệu
                    quả hơn đất nông nghiệp
                  </a>
                </h1>
              </div>
            </div>
            <div className="boxs__item">
              <a href="#" className="boxs__item-img">
                <img className="img" src="img/banner2.jpg" alt="" />
              </a>
              <div className="boxs__item-info">
                <h1 className="heading-h3">
                  <a href="#">
                    Dự thảo Luật Đất đai sửa đổi: Cần giải phóng, sử dụng hiệu
                    quả hơn đất nông nghiệp
                  </a>
                </h1>
              </div>
            </div>
            <div className="boxs__item">
              <a href="#" className="boxs__item-img">
                <img className="img" src="img/banner2.jpg" alt="" />
              </a>
              <div className="boxs__item-info">
                <h1 className="heading-h3">
                  <a href="#">
                    Dự thảo Luật Đất đai sửa đổi: Cần giải phóng, sử dụng hiệu
                    quả hơn đất nông nghiệp
                  </a>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeCol;
