import { useQuery } from "@tanstack/react-query";

import { FC } from "react";
import getCategories from "./api";
import { getCategoriesResponse } from "./api";
import { ItemList } from "./List";

const Categories: FC = () => {
  const { data, error } = useQuery<getCategoriesResponse>(
    ["categoriesWithItems"],
    getCategories
  );

  console.log("categories", error);

  return (
    <>
      {data?.categories.map((category) => (
        <ItemList key={category.title} items={category.items} />
      ))}
    </>
  );
};

export default Categories;
