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
    load,
    dataPs,
    dataInfoGr,
    dataRadio,
    listNewsRandom,
    dataVideo,
    dataEmg,
    headerMidle,
  } = useHomPage() || {};
  const { isLoading, loadNewRandom } = load || {};

  if (isLoading || loadNewRandom) {
    return <Loading />;
  }
  return (
    // <h1>hehe</h1>
    <>
      <Headermidle headerMidle={headerMidle} />
      <main className="homepage">
        <TwoCol data={dataVideo} />
        <Listnews isRender={false} data={dataVideo} />
        <Advert />
        <ThreeCol data={dataEmg} label="Emagazine" />
        <Listnews
          className="--company"
          children
          data={dataRadio}
          label="Radio"
        />
        <ThreeCol classname={false} data={dataInfoGr} label="Infographic" />
        <Listnews data={dataPs} label={"Phóng sự ảnh"} />
        <Advert />
        {/* <ThreeCol data={dataPersons}  label="Người truyền lửa" /> */}
        <ThreeCol data={listNewsRandom} label="Tin tức liên quan " />
        <Newest data={listNewsRandom} />
      </main>
    </>
  );
};

export default HomePage;
