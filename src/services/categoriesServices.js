import axios from "axios";
import { BASE_URL } from "../constants/env";

export const Category = {
  getListCategories(query = "") {
    return axios.get(`${BASE_URL}/category/list${query}`);
  },
};
