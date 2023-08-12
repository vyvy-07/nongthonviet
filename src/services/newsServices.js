import axios from "axios";
import { BASE_URL } from "../constants/env";

export const ListNews = {
  getNews(id) {
    return axios.get(
      `${BASE_URL}/article/listing?limit=7&skip=0&categoryId=${id}`
    );
  },
};
