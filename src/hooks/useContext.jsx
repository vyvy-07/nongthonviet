import React, { createContext, useContext, useEffect, useState } from "react";
import { Category } from "../services/categoriesServices";
import useQuery from "./useQuery";
import { ListNews } from "../services/newsServices";

const pageContext = createContext({});
export const PageProvider = ({ children }) => {
  const [isModal, setIsModal] = useState(false);
  // const [dataVideo, setDataVideo] = useState([]);
  // const [dataEmg, setDataEmg] = useState([]);
  // const [dataPs, setDataPs] = useState([]);
  // const [dataInfoGr, setDataInfoGr] = useState([]);
  // const [dataRadio, setDataRadio] = useState([]);
  const [listCategory, setListCategory] = useState([]);

  const [idCategories, setIdCategories] = useState({
    idMedia: "",
  });
  const [idMedia, setIdMedia] = useState({
    idVideo: "",
    idEmg: "",
    idRadio: "",
    idPS: "",
    idGr: "",
  });

  const onChangeModal = () => setIsModal(!isModal);

  //open modal
  const headerMidle = {
    listCategory,
    setListCategory,
    onChangeModal,
    setIsModal,
    isModal,
  };
  const [dataMain, setDataMain] = useState({});

  const getCategory = async () => {
    try {
      const res = await Category.getListCategories();
      if (res) {
        setListCategory(res?.data?.result);
        const listCategorys = res?.data?.result;
        if (listCategorys) {
          const newArr = listCategorys?.map((item) => {
            return {
              id: item?.id,
              name: item?.alias,
              subCates: item?.subCates || [],
            };
          });
          if (newArr) {
            const newIdCategories = {};
            newArr?.map((item) => {
              if (item?.name === "media") {
                newIdCategories.idMedia = item?.id;
                if (item?.subCates) {
                  const dataM = item?.subCates.map((item) => {
                    return { id: item?.id, name: item?.alias };
                  });

                  if (dataM) {
                    let dataAll = {};
                    if (!!dataM?.length > 0) {
                      dataM.map((item) => {
                        if (item?.name === "video") {
                          dataAll.idVideo = item?.id;
                        } else if (item?.name === "emagazine") {
                          dataAll.idEmg = item?.id;
                        } else if (item?.name === "radio") {
                          dataAll.idRadio = item?.id;
                        } else if (item?.name === "phong-su-anh") {
                          dataAll.idPS = item?.id;
                        } else if (item?.name === "infographic") {
                          dataAll.idGr = item?.id;
                        }
                      });
                      setIdMedia(dataAll);
                    }
                  }
                  setDataMain(dataM);
                }
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
      console.log("success!");
    };
    awCategory();
  }, []);

  return (
    <pageContext.Provider
      value={{
        // dataVideo,
        listCategory,
        setListCategory,
        headerMidle,
        idMedia,
      }}
    >
      {children}
    </pageContext.Provider>
  );
};
export const usePage = () => useContext(pageContext);
