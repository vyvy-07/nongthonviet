import { usePage } from "../../hooks/useContext";
import { ListNews } from "../../services/newsServices";
import useQuery from "../../hooks/useQuery";
import { useEffect, useState } from "react";

const useHomPage = () => {
  const { idMedia } = usePage();
  const [dataVideo, setDataVideo] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [dataEmg, setDataEmg] = useState([]);
  const [dataPs, setDataPs] = useState([]);
  const [dataInfoGr, setDataInfoGr] = useState([]);
  const [dataRadio, setDataRadio] = useState([]);
  const { data: listNewsRandom, isLoading: loadNewRandom } = useQuery(() =>
    ListNews.getListNews("&query=", "isFeatured=true")
  );
  const load = {
    loadNewRandom,
    isloading,
  };

  const getVideoData = async () => {
    try {
      const res = await ListNews.getDataCateItem(idMedia?.idVideo, "10");
      if (res) {
        setIsloading(false);
      }
      setDataVideo(res?.data?.result);
    } catch (error) {
      if (error) {
        setIsloading(false);
      }
    }
  };
  const getEmg = async () => {
    try {
      const res = await ListNews.getDataCateItem(idMedia?.idEmg, "10");
      setDataEmg(res?.data?.result);
      if (res) {
        setIsloading(false);
      }
    } catch (error) {
      if (error) {
        setIsloading(false);
      }

      console.log("error", error);
    }
  };
  const getPS = async () => {
    try {
      const res = await ListNews.getDataCateItem(idMedia?.idPS, "10");
      setDataPs(res?.data?.result);
      if (res) {
        setIsloading(false);
      }
    } catch (error) {
      if (error) {
        setIsloading(false);
      }

      console.log("error", error);
    }
  };
  const getRadio = async () => {
    try {
      const res = await ListNews.getDataCateItem(idMedia?.idRadio, "10");
      setDataRadio(res?.data?.result);
      if (res) {
        setIsloading(false);
      }
    } catch (error) {
      if (error) {
        setIsloading(false);
      }

      console.log("error", error);
    }
  };

  const getInfographic = async () => {
    try {
      const res = await ListNews.getDataCateItem(idMedia?.idGr, "10");
      setDataInfoGr(res?.data?.result);
      if (res) {
        setIsloading(false);
      }
    } catch (error) {
      if (error) {
        setIsloading(false);
      }

      console.log("error", error);
    }
  };
  useEffect(() => {
    const getData = async () => {
      if (idMedia?.idVideo) {
        getVideoData();
        getEmg();
        getRadio();
        getPS();
        getInfographic();
      }
    };
    getData();
  }, [idMedia]);

  return {
    load,
    dataPs,
    dataInfoGr,
    dataRadio,
    listNewsRandom,
    dataVideo,
    dataEmg,
  };
};

export default useHomPage;
