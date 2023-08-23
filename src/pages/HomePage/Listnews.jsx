import React from "react";
import BoxsItem from "../../components/BoxsItem";

const Listnews = ({
  data,
  isRender = true,
  className,
  children = false,
  dataFoward,
  label,
}) => {
  return (
    <section className={`listnews ${className}`}>
      <div className="container">
        {isRender && (
          <div className="sctitle">
            <h2
              style={{ textTransform: "uppercase" }}
              className="heading fs22 ffb"
            >
              {label}
            </h2>
          </div>
        )}
        <div className="boxs p-tb32">
          {data?.length > 0 &&
            data?.slice(5, 9).map((item, index) => {
              return <BoxsItem {...item} key={item?.id || index} />;
            })}
        </div>
        {children && (
          <div className="listnews__company p-bt32">
            <div className="listnews__company-item">
              <img className="img" src="/img/banner3.jpg" alt="" />
            </div>
            <div className="listnews__company-item">
              <img className="img" src="/img/banner4.jpg" alt="" />
            </div>
            <div className="listnews__company-item">
              <img className="img" src="/img/banner6.jpg" alt="" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Listnews;
