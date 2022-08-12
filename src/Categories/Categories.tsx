import { useQuery } from "@tanstack/react-query";

import { FC } from "react";
import { GridContainer } from "../components/GridContainer";
import { Typography } from "../components/Typography";
import getCategories from "./api";
import { getCategoriesResponse } from "./api";
import { ItemList } from "./List";

const Categories: FC = () => {
  const { data, error } = useQuery<getCategoriesResponse>(
    ["categoriesWithItems"],
    getCategories
  );

  return (
    <GridContainer rows={3} columns={1} spacing={20}>
      <Typography variant="section">FAVORITOS</Typography>
      {data?.categories.map((category) => (
        <ItemList key={category.title} items={category.items} />
      ))}
    </GridContainer>
  );
};

export default Categories;
