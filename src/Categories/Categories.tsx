import { useQuery } from "@tanstack/react-query";

import { FC, useState } from "react";
import { GridContainer } from "../components/GridContainer";
import { Typography } from "../components/Typography";
import getCategories from "./api";
import { getCategoriesResponse } from "./api";
import { ItemList } from "./List";
import { CategoryItem } from "./types";

const defaultFavorites = [
  {
    description:
      "Cinco asesinos a sueldo se encuentran a bordo de un tren bala que viaja de Tokio a Morioka. Los sicarios descubrirán que sus misiones no son ajenas entre sí.",
    id: 1,
    image_url:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRYkjfe8qVH0Z8ftXqb8r7L-1yzFAbYsFkIF0jT_csTTvTYkELx",
    title: "Bullet Train",
  },
  {
    description:
      "Un Cuento de Navidad para nuestra época. Egoísta y solitaria, Cassandra Darke es una marchante de arte que vive en una lujosa mansión del barrio de Chelsea, en el mismísimo corazón de Londres. Se ha convertido en una paria social, pero no le preocupa",
    id: 6,
    image_url:
      "https://i.picsum.photos/id/521/200/300.jpg?hmac=_MGlU-tHw5IBlsNL7YvJ9lTMo4Ge605GWQwuKGxWIWU",
    title: "Cassandra Darke",
  },
];

const Categories: FC = () => {
  const { data, error } = useQuery<getCategoriesResponse>(
    ["categoriesWithItems"],
    getCategories
  );

  const [favorites, setFavorites] = useState<CategoryItem[]>(defaultFavorites);

  console.log("categories", error);

  return (
    <GridContainer rows={3} columns={1} spacing={20}>
      <ItemList sectionTitle="FAVORITOS" items={favorites} />
      {data?.categories.map((category) => (
        <ItemList
          key={category.title}
          sectionTitle={category.title}
          items={category.items}
        />
      ))}
    </GridContainer>
  );
};

export default Categories;
