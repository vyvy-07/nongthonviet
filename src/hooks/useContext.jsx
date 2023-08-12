import React, { createContext, useContext, useEffect, useState } from "react";
import { Category } from "../services/categoriesServices";
import { ListNews } from "../services/newsServices";
import useQuery from "./useQuery";
import Loading from "../components/Loading";

const pageContext = createContext({});
export const PageProvider = ({ children }) => {
  const [listCategory, setListCategory] = useState([]);
  const [idMedia, setIdMedia] = useState("");
  const [news, setNews] = useState("");
  const [country360, setCountry360] = useState("");
  const [forward, setForward] = useState("");
  const [newCountry, setNewCountry] = useState("");
  const [idSocials, setidSocials] = useState("");
  const [dataMedia, setDataMedia] = useState([]);
  const [dataNews, setDataNews] = useState([]);

  const getCategory = async () => {
    try {
      const res = await Category.getListCategories();
      if (res) {
        setListCategory(res?.data?.result);
        // const result = res?.data?.result;
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    const awCategory = async () => {
      const res = await getCategory();
      console.log("success");
    };
    awCategory();
  }, []);
  const listID = {
    idMedia,
    // country360,
    news,
    // forward,
    // newCountry,
    // idSocials,
  };
  useEffect(() => {
    if (listCategory) {
      const newArr = listCategory?.map((item) => {
        return { id: item?.id, name: item?.alias };
      });
      if (newArr) {
        newArr?.find((item) => {
          item?.name === "media" && setIdMedia(item?.id);
          return idMedia;
        });
        // newArr?.find((item) => {
        //   item?.name === "tin-tuc" && setNews(item?.id);
        //   return news;
        // });
        // newArr?.find((item) => {
        //   return item?.name === "tin-tuc" && setNews(item?.id);
        // });
        // newArr?.find((item) => {
        //   return item?.name === "nong-nghiep-360" && setCountry360(item?.id);
        // });
        // newArr?.find((item) => {
        //   return item?.name === "goc-nhin-chuyen-gia" && setForward(item?.id);
        // });
        // newArr?.find((item) => {
        //   return item?.name === "nong-thon-moi" && setNewCountry(item?.id);
        // });
        // newArr?.find((item) => {
        //   return item?.name === "vi-cong-dong" && setidSocials(item?.id);
        // });
      }

      if (idMedia) {
        getMedias();
      }
      // if (news) {
      //   getMedias();
      // }
    }
  }, [listCategory, idMedia]);

  const getMedias = async () => {
    try {
      const res = await ListNews.getNews(idMedia);
      if (res) {
        setDataMedia(res?.data?.result);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  console.log("idMedia", idMedia);
  const getlistNews = async () => {
    try {
      const res = await ListNews.getNews(news);
      if (res) {
        setDataNews(res?.data?.result);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  console.log("news", news);
  return (
    <pageContext.Provider
      value={{ listCategory, setListCategory, dataMedia, dataNews }}
    >
      {children}
    </pageContext.Provider>
  );
};
export const usePage = () => useContext(pageContext);
