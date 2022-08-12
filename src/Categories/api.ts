import axios from "axios";
import { Category } from "./types";

export type getCategoriesResponse = {
  categories: Category[];
};

const getCategories = () =>
  axios
    .get("http://localhost:8080/categories")
    .then<getCategoriesResponse>((res) => res.data);

export default getCategories;
