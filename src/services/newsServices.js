import axios from "axios";
import { BASE_URL } from "../constants/env";

export const ListNews = {
  getNews(id = "", query = "") {
    return axios.get(
      `${BASE_URL}/article/listing?limit=7&skip=0&categoryId=${id}&isRandomArrange=true&${query}`
    );
  },
  getNewsDetail(alias = "") {
    return axios.get(`${BASE_URL}/article/${alias}`);
  },
  getListNews(id, query = "") {
    return axios.get(
      `${BASE_URL}/article/listing?limit=30&skip=0&sort=publicationTime%3Ddesc,isFeatured%3Ddesc&categoryId=${id}&includeChildCate=true&isRandomArrange=true&${query}`
    );
  },
  getDataCateItem(id = "", query = "") {
    return axios.get(
      `${BASE_URL}/article/listing?limit=${query}&skip=0&categoryId=${id}&includeChildCate=true&sort=publicationTime%3Ddesc&isRandomArrange=true`
    );
  },
};
