import React from "react";
import BoxsItem from "../../components/BoxsItem";

const TwoCol = ({ data }) => {
  return (
    <section className="twoCol">
      <div className="container">
        <div className="gridcol b-bt p-tb32">
          {data?.length > 0 &&
            data?.slice(0, 1).map((item, index) => {
              return (
                <BoxsItem
                  key={item?.id || index}
                  className={"--boxs-xl"}
                  {...item}
                />
              );
            })}

          <div className="boxs">
            {data?.length > 0 &&
              data?.slice(1, 4).map((item, index) => {
                return (
                  <BoxsItem
                    key={item?.id || index}
                    date__time={false}
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

export default TwoCol;
