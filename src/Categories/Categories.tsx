import { useQuery } from "@tanstack/react-query";
import { ItemList } from "../components/ItemList";

import { FC } from "react";
import getCategories from "./api";
import { Category } from "./types";
import axios from "axios";
import { getCategoriesResponse } from "./api";

const Categories: FC = () => {
  const { data, error } = useQuery<getCategoriesResponse>(
    ["categoriesWithItems"],
    getCategories
  );

  console.log("categories", error);

  return (
    <>
      App
      {data?.categories.map((category) => (
        <ItemList key={category.title} items={category.items} />
      ))}
    </>
  );
};

export default Categories;
