import React from "react";
import Headermidle from "../../components/HeaderMidle/Headermidle";
import Newest from "../../components/Newest/Newest";
import Comments from "../../components/Comments";
import ContentDetail from "./ContentDetail";
import useNewsDetail from "./useNewsDetail";
import Loading from "../../components/Loading";

const NewsDetail = () => {
  // const { slug } = useNewsDetail();
  const { alias, isLoading, dataNewsDetail } = useNewsDetail();
  if (!!isLoading) {
    console.log("isLoading", isLoading);
    return <Loading />;
  }
  return (
    <div>
      <Headermidle heading={false} nav={false} />
      <main>
        <ContentDetail {...dataNewsDetail} />
        <Comments {...dataNewsDetail} />
        <Newest label="Mới nhất" />
      </main>
    </div>
  );
};

export default NewsDetail;
