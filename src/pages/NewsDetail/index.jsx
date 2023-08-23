import React from "react";
import Headermidle from "../../components/HeaderMidle/Headermidle";
import Newest from "../../components/Newest/Newest";
import Comments from "../../components/Comments";
import ContentDetail from "./ContentDetail";
import useNewsDetail from "./useNewsDetail";
import Loading from "../../components/Loading";
import useDebounce from "../../hooks/useDebounce";

const NewsDetail = () => {
  // const { slug } = useNewsDetail();
  const { isLoading, dataNewsDetail, dataNewsRelate, dataFeatured } =
    useNewsDetail();
  // if (!!isLoading) {
  //   console.log("isLoading", isLoading);
  //   return <Loading />;
  // }
  const loading = useDebounce(isLoading, 400);
  console.log("dataFeatured", dataFeatured);
  return (
    <div>
      {/* {dataFeatured && ( */}
      <>
        <Headermidle heading={false} nav={false} />
        <main>
          <ContentDetail {...dataNewsDetail} data={dataNewsRelate} />
          <Comments {...dataNewsDetail} />
          <Newest label="Mới nhất" data={dataFeatured} />
        </main>
      </>
      {/* )} */}
    </div>
  );
};

export default NewsDetail;
