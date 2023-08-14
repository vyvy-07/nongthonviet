import { usePage } from "../../hooks/useContext";
import { ListNews } from "../../services/newsServices";
import useQuery from "../../hooks/useQuery";

const useHomPage = () => {
  const { data: listNewsRandom, isLoading } = useQuery(() =>
    ListNews.getListNews()
  );
  const {
    dataMedia,
    dataNews,
    dataCountry,
    dataFoward,
    dataNewCountry,
    dataSocials,
    dataPersons,
  } = usePage();
  return {
    dataMedia,
    dataCountry,
    dataNews,
    dataSocials,
    dataFoward,
    dataNewCountry,
    dataPersons,
    listNewsRandom,
    isLoading,
  };
};

export default useHomPage;
