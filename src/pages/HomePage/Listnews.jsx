import React from "react";
import BoxsItem from "../../components/BoxsItem";

const Listnews = ({
  dataNews,
  isRender = true,
  className,
  children = false,
}) => {
  return (
    <section className={`listnews ${className}`}>
      <div className="container">
        {isRender && (
          <div className="sctitle">
            <h2 className="heading fs22 ffb">Tin tức</h2>
          </div>
        )}
        <div className="boxs p-tb32">
          {dataNews?.length > 0 &&
            dataNews?.map((item, index) => {
              return <BoxsItem {...item} key={item?.id || index} />;
            })}
          {/* <div className="boxs__item">
            <a href="#" className="boxs__item-img">
              <img className="img" src="img/banner2.jpg" alt="" />
            </a>
            <div className="boxs__item-info">
              <h1 className="heading-h3">
                <a href="#">
                  Dự thảo Luật Đất đai sửa đổi: Cần giải phóng, sử dụng hiệu quả
                  hơn đất nông nghiệp
                </a>
              </h1>
            </div>
          </div> */}
        </div>
        {children && (
          <div className="listnews__company p-bt32">
            <div className="listnews__company-item">
              <img className="img" src="img/lg-company.svg" alt="" />
            </div>
            <div className="listnews__company-item">
              <img className="img" src="img/ma.svg" alt="" />
            </div>
            <div className="listnews__company-item">
              <img className="img" src="img/man.svg" alt="" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Listnews;
