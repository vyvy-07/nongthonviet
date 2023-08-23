import React, { useState } from "react";
import BoxsItem from "../../components/BoxsItem";

const Newest = ({ data }) => {
  const [renderMore, setRenderMore] = useState(false);
  const listFeature = data?.filter((item) => item?.isFeatured == true);

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
                data?.slice(7, 12).map((item, index) => {
                  return (
                    item && (
                      <BoxsItem {...item} desc_e key={item?.id || index} />
                    )
                  );
                })}
            </div>
            {renderMore && (
              <div
                className="boxs --boxs-sm --boxdflex"
                style={{
                  paddingTop: "20px",
                  marginTop: "20px",
                  borderTop: " 1px solid black",
                }}
              >
                {data?.length > 0 &&
                  data?.slice(12, 20).map((item, index) => {
                    return (
                      item && (
                        <BoxsItem {...item} desc_e key={item?.id || index} />
                      )
                    );
                  })}
              </div>
            )}
            {!renderMore && (
              <p className="viewmore ffb p-t20">
                <span
                  className="text grey9"
                  onClick={() => setRenderMore(true)}
                >
                  XEM THÊM
                </span>
              </p>
            )}
          </div>
          <div className="scnewest__gridcol-wrapright">
            <p className="title ffb black p-bt16">Nổi bật trong tuần</p>
            <div className="boxs --boxs-xs --boxs-xxs">
              {data?.length > 0 &&
                data?.slice(20, 28).map((item, index) => {
                  console.log(" item?.isFeatured", item?.isFeatured);
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
