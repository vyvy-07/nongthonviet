import { useParams } from "react-router-dom";
import { ListNews } from "../../services/newsServices";
import { useEffect, useState } from "react";

const useNewsDetail = () => {
  const [dataNewsDetail, setDataNewsDetail] = useState({});
  const [dataNewsRelate, setDataNewsRelate] = useState([]);
  const [dataFeatured, setDataFeatured] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const { alias } = useParams();

  const getDataProduct = async () => {
    try {
      setIsLoading(false);
      if (alias) {
        const dataProduct = await ListNews.getNewsDetail(alias);
        const data = dataProduct?.data?.result;
        const id = dataProduct?.data?.result?.id;
        if (id) {
          setDataNewsDetail(data);
        }
        if (data?.category?.categoryId) {
          getProductRelate(data?.category?.categoryId);
          getFeatured();
        }
      }
    } catch (error) {
      setIsLoading(false);
      console.log("error", error);
    }
  };

  const getProductRelate = async (id) => {
    try {
      setIsLoading(false);
      const dataProductRelate = await ListNews.getNews(id);
      const dataRelate = dataProductRelate?.data?.result;
      if (dataRelate) {
        setDataNewsRelate(dataRelate);
      }
    } catch (error) {
      setIsLoading(false);
      console.log("error", error);
    }
  };
  const getFeatured = async (id) => {
    try {
      setIsLoading(false);
      const dataFeatured = await ListNews.getListNews(id, "isFeatured=true");
      const data = dataFeatured?.data?.result;
      if (data) {
        setDataFeatured(data);
      }
    } catch (error) {
      setIsLoading(false);
      console.log("error", error);
    }
  };
  useEffect(() => {
    getDataProduct();
  }, [alias]);
  /***/
  return { alias, isLoading, dataNewsDetail, dataNewsRelate, dataFeatured };
};

export default useNewsDetail;
