import { useParams } from "react-router-dom";
import { ListNews } from "../../services/newsServices";
import useQuery from "../../hooks/useQuery";

const useNewsDetail = () => {
  const { alias } = useParams();

  const { data: dataNewsDetail, isLoading } = useQuery(() =>
    ListNews.getNewsDetail(alias)
  );
  console.log("dataNewsDetail", dataNewsDetail);
  return { alias, isLoading, dataNewsDetail };
};

export default useNewsDetail;
