import React from "react";
import BoxsItem from "../../components/BoxsItem";

const TwoCol = ({ dataMedia, isLoading }) => {
  return (
    <section className="twoCol">
      <div className="container">
        <div className="gridcol b-bt p-tb32">
          {dataMedia?.length > 0 &&
            dataMedia?.slice(0, 1).map((item, index) => {
              return (
                <BoxsItem
                  key={item?.id || index}
                  className={"--boxs-xl"}
                  {...item}
                />
              );
            })}

          <div className="boxs">
            {dataMedia?.length > 0 &&
              dataMedia?.slice(1, 4).map((item, index) => {
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
