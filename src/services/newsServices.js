import axios from "axios";
import { BASE_URL } from "../constants/env";

export const ListNews = {
  getNews(id = "", alias = "") {
    return axios.get(
      `${BASE_URL}/article/listing?limit=7&skip=0&categoryId=${id}`
    );
  },
  getNewsDetail(alias = "") {
    //api.nongthonviet.com.vn/public/article/
    return axios.get(`${BASE_URL}/article/${alias}`);
  },
  getListNews(query = "") {
    return axios.get(
      `${BASE_URL}/article/listing?limit=20&skip=0&sort=publicationTime%3Ddesc,isFeatured%3Ddesc&categoryId=${query}&includeChildCate=true&isRandomArrange=true`
    );
  },
};
// listing?limit=20&skip=0&sort=publicationTime%3Ddesc,isFeatured%3Ddesc&categoryId=6017deb908d7227e0a6f7274&includeChildCate=true&isRandomArrange=true
