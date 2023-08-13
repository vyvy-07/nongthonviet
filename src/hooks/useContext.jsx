import React, { createContext, useContext, useEffect, useState } from "react";
import { Category } from "../services/categoriesServices";
import { ListNews } from "../services/newsServices";
import useQuery from "./useQuery";
import Loading from "../components/Loading";

const pageContext = createContext({});
export const PageProvider = ({ children }) => {
  const [listCategory, setListCategory] = useState([]);
  // const [idMedia, setIdMedia] = useState("");
  // const [news, setNews] = useState("");
  // const [country360, setCountry360] = useState("");
  // const [forward, setForward] = useState("");
  const [dataSocials, setDataSocials] = useState([]);
  const [dataMedia, setDataMedia] = useState([]);
  const [dataNews, setDataNews] = useState([]);
  const [dataFoward, setDataFoward] = useState([]);
  const [dataCountry, setDataCountry] = useState([]);
  const [dataNewCountry, setDataNewCountry] = useState([]);
  const [dataPersons, setDataPersons] = useState([]);
  const [idCategories, setIdCategories] = useState({
    idMedia: "",
    news: "",
    country360: "",
    forward: "",
    newCountry: "",
    socials: "",
    persons: "",
  });

  const getCategory = async () => {
    try {
      const res = await Category.getListCategories();
      if (res) {
        setListCategory(res?.data?.result);
        const listCategorys = res?.data?.result;
        if (listCategorys) {
          const newArr = listCategorys?.map((item) => {
            return { id: item?.id, name: item?.alias };
          });
          if (newArr) {
            const newIdCategories = {};
            newArr?.map((item) => {
              if (item?.name === "media") {
                newIdCategories.idMedia = item?.id;
              }
              if (item?.name === "tin-tuc") {
                newIdCategories.news = item?.id;
              }
              if (item?.name === "nong-nghiep-360") {
                newIdCategories.news = item?.id;
              }
              if (item?.name === "goc-nhin-chuyen-gia") {
                newIdCategories.forward = item?.id;
              }
              if (item?.name === "nong-thon-moi") {
                newIdCategories.newCountry = item?.id;
              }
              if (item?.name === "vi-cong-dong") {
                newIdCategories.socials = item?.id;
              }
              if (item?.name === "nguoi-truyen-lua") {
                newIdCategories.persons = item?.id;
              }
            });
            setIdCategories(newIdCategories);
          }
        }
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

  const getMedias = async () => {
    try {
      const res = await ListNews.getNews(idCategories?.idMedia);
      if (res) {
        setDataMedia(res?.data?.result);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const getNews = async () => {
    try {
      const res = await ListNews.getNews(idCategories?.news);
      if (res) {
        setDataNews(res?.data?.result);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  const getCountry360 = async () => {
    try {
      const res = await ListNews.getNews(idCategories?.country360);
      if (res) {
        setDataCountry(res?.data?.result);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const getFoward = async () => {
    try {
      const res = await ListNews.getNews(idCategories?.forward);
      if (res) {
        setDataFoward(res?.data?.result);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  const getNewCountry = async () => {
    try {
      const res = await ListNews.getNews(idCategories?.newCountry);
      if (res) {
        setDataNewCountry(res?.data?.result);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  const getSocials = async () => {
    try {
      const res = await ListNews.getNews(idCategories?.socials);
      if (res) {
        setDataSocials(res?.data?.result);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const getPersonss = async () => {
    try {
      const res = await ListNews.getNews(idCategories?.persons);
      if (res) {
        setDataPersons(res?.data?.result);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (idCategories?.idMedia && idCategories?.news) {
          const [promiseNews, promiseMedia] = await Promise.all([
            getNews(),
            getMedias(),
            getCountry360(),
            getFoward(),
            getNewCountry(),
            getSocials(),
            getPersonss(),
          ]);
        }
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [
    idCategories?.idMedia,
    idCategories?.news,
    idCategories?.forward,
    idCategories?.country360,
    idCategories?.newCountry,
    idCategories?.socials,
    idCategories?.persons,
  ]);
  return (
    <pageContext.Provider
      value={{
        listCategory,
        setListCategory,
        dataMedia,
        dataNews,
        dataCountry,
        dataFoward,
        dataNewCountry,
        dataSocials,
        dataPersons,
      }}
    >
      {children}
    </pageContext.Provider>
  );
};
export const usePage = () => useContext(pageContext);
