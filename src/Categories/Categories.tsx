import { useQuery } from "@tanstack/react-query";

import { FC } from "react";
import { Typography } from "../components/Typography";
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
      <Typography variant="section">FAVORITOS</Typography>
      {data?.categories.map((category) => (
        <ItemList key={category.title} items={category.items} />
      ))}
    </>
  );
};

export default Categories;
