import React from "react";
import BoxsItem from "../../components/BoxsItem";

const ThreeCol = ({ classname = true, data, label }) => {
  return (
    <section className="threeCol">
      <div className="container">
        <div className={`sctitle ${classname && "p-t32"}`}>
          <h2
            style={{ textTransform: "uppercase" }}
            className="heading fs22 ffb"
          >
            {label}
          </h2>
        </div>
        <div className="gridcol p-tb32">
          {data?.length > 0 &&
            data?.slice(0, 1).map((item, index) => {
              return (
                <BoxsItem
                  key={item?.id || index}
                  className={`--boxs-m --boxs-xl`}
                  {...item}
                />
              );
            })}
          <div className="boxs --boxs-sm">
            {data?.length > 0 &&
              data?.slice(1, 3).map((item, index) => {
                return <BoxsItem key={item?.id || index} {...item} />;
              })}
          </div>
          <div className="boxs --boxs-xs">
            {data?.length > 0 &&
              data?.slice(2, 7).map((item, index) => {
                return (
                  <BoxsItem
                    date__time={false}
                    key={item?.id || index}
                    {...item}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeCol;
