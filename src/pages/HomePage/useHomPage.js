import { useEffect, useState } from "react";
import { usePage } from "../../hooks/useContext";
import { ListNews } from "../../services/newsServices";
import useQuery from "../../hooks/useQuery";

const useHomPage = () => {
  // const [dataMedia, setDataMedia] = useState();
  // const [dataNews, setDataNews] = useState();
  const { listCategory, dataMedia, dataNews } = usePage();
  // const {
  //   idMedia,
  //   country360,
  //   news,
  //   forward,
  //   newCountry,
  //   idSocials,
  //   dataMedia,
  //   dataNews,
  //   isloading,
  // } = listID || {};

  // const getMedias = async () => {
  //   try {
  //     const res = await ListNews.getNews(`categoryId=${idMedia}`);
  //     if (res) {
  //       setDataMedia(res?.data?.result);
  //     }
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };

  // useEffect(() => {
  //   if (idMedia) {
  //     console.log("idMedia", idMedia);
  //     getMedias();
  //   }
  //   // if (news) getListNews();
  // }, []);

  // const getListNews = async () => {
  //   try {
  //     const res = await ListNews.getNews(news);
  //     console.log("res", res);
  //     if (res) {
  //       setDataNews(res?.data?.result);
  //     }
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };
  // console.log("dataNews", dataNews);
  // console.log("dataNews", dataNews);
  // const getData = () => {
  //   if (idMedia) {
  //     console.log("dataMedia", dataMedia);
  //   }
  // };
  // const { data: dataMedia } = useQuery(() => ListNews.getNews(idMedia));
  // const { data: dataNews } = useQuery(() => ListNews.getNews(news));
  // const { data: dataForward } = useQuery(() => ListNews.getNews(forward));
  // console.log("dataForward", dataForward);
  // getData()
  return {
    dataMedia,
    // dataForward,
    // isloading,
    dataNews,
  };
};

export default useHomPage;
