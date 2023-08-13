import React from "react";
import BoxsItem from "../../components/BoxsItem";

const Newest = ({ data }) => {
  return (
    <section className="scnewest">
      <div className="container">
        <div className="sctitle">
          <h2 className="heading fs22 ffb">MỚI NHẤT</h2>
        </div>
        <div className="scnewest__gridcol">
          <div className="scnewest__gridcol-wrapleft">
            <div className="boxs --boxs-sm --boxdflex">
              {data?.length > 0 &&
                data?.slice(0, 7).map((item, index) => {
                  return <BoxsItem {...item} desc_e key={item?.id || index} />;
                })}
            </div>
            <p className="viewmore ffb p-t20">
              <span className="text grey9">XEM THÊM</span>
            </p>
          </div>
          <div className="scnewest__gridcol-wrapright">
            <p className="title ffb black p-bt16">Nổi bật trong tuần</p>
            <div className="boxs --boxs-xs --boxs-xxs">
              {data?.length > 0 &&
                data?.slice(7, 15).map((item, index) => {
                  return (
                    item && (
                      <BoxsItem
                        date__time={false}
                        {...item}
                        key={item?.id || index}
                      />
                    )
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newest;
