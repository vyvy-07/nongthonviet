import React from "react";
import Advert from "./Advert";
import Listnews from "./Listnews";
import ThreeCol from "./ThreeCol";
import TwoCol from "./TwoCol";
import useHomPage from "./useHomPage";
import "./home.css";
import Loading from "../../components/Loading";
import Headermidle from "../../components/HeaderMidle/Headermidle";
import Newest from "../../components/Newest/Newest";
const HomePage = () => {
  const {
    dataMedia,
    dataPersons,
    dataNews,
    dataCountry,
    dataFoward,
    dataNewCountry,
    dataSocials,
    listNewsRandom,
    isLoading,
    headerMidle,
  } = useHomPage() || {};

  return (
    <>
      <Headermidle headerMidle={headerMidle} />
      <main className="homepage">
        <TwoCol dataMedia={dataMedia} />
        <Listnews isRender={false} data={dataNews} label="Tin tức" />
        <Advert />
        <ThreeCol data={dataCountry} label="Nông Nghiệp 360" />
        <Listnews
          className="--company"
          children
          data={dataFoward}
          label="Tầm nhìn các chuyên gia"
        />
        <ThreeCol
          classname={false}
          data={dataNewCountry}
          label="Nông Thôn mới"
        />
        <Listnews data={dataSocials} label={"Vì cộng đồng"} />
        <Advert />
        <ThreeCol data={dataPersons} label="Người truyền lửa" />
        <Newest data={listNewsRandom} />
      </main>
    </>
  );
};

export default HomePage;
