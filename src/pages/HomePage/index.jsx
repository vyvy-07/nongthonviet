import React from "react";
import Advert from "./Advert";
import Listnews from "./Listnews";
import Newest from "./Newest";
import ThreeCol from "./ThreeCol";
import TwoCol from "./TwoCol";
import useHomPage from "./useHomPage";

const HomePage = () => {
  const { dataMedia, dataForward, dataNews } = useHomPage() || {};
  return (
    <main className="homepage">
      <TwoCol dataMedia={dataMedia} />
      <Listnews isRender={false} dataNews={dataNews} />
      <Advert />
      <ThreeCol />
      <Listnews className="--company" children />
      <ThreeCol classname={false} />
      <Listnews />

      <Advert />
      <ThreeCol />
      <Newest />
    </main>
  );
};

export default HomePage;
