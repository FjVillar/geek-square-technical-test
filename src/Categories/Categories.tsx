import { useQuery } from "@tanstack/react-query";

import { FC, useState } from "react";
import { CenteredContainer } from "../components/CenteredContainer";
import { GridContainer } from "../components/GridContainer";
import { useMediaQuery } from "../hooks";

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
    categoryTitle: "Películas",
  },
  {
    description:
      "Un Cuento de Navidad para nuestra época. Egoísta y solitaria, Cassandra Darke es una marchante de arte que vive en una lujosa mansión del barrio de Chelsea, en el mismísimo corazón de Londres. Se ha convertido en una paria social, pero no le preocupa",
    id: 6,
    image_url:
      "https://i.picsum.photos/id/521/200/300.jpg?hmac=_MGlU-tHw5IBlsNL7YvJ9lTMo4Ge605GWQwuKGxWIWU",
    title: "Cassandra Darke",
    categoryTitle: "Cómics",
  },
];

const Categories: FC = () => {
  const { data, error, isLoading } = useQuery<getCategoriesResponse>(
    ["categoriesWithItems"],
    getCategories
  );

  const isMobile = useMediaQuery();

  const [favorites, setFavorites] = useState<CategoryItem[]>(defaultFavorites);

  const handleRemoveFromFavorites = (item: CategoryItem) => {
    const newFavorites = favorites.filter(
      (favorite) => favorite.id !== item.id
    );
    setFavorites(newFavorites);
  };

  const handleAddToFavorites = (item: CategoryItem, categoryTitle: string) => {
    const alreadyInFavoriteItem = favorites.find(
      (favorite) => favorite.id === item.id
    );

    // If we haven't found the item in the current favorite list, we add it
    // we have to add categoryTitle to the item properties. It is explained
    // why on the README.md
    if (alreadyInFavoriteItem === undefined) {
      setFavorites([...favorites, { ...item, categoryTitle }]);
    }
  };

  return (
    <CenteredContainer isMobile={isMobile}>
      <>
        {isLoading && "Cargando..."}
        {error && `Ha ocurrido un error al cargar los datos: ${error}`}
        {!isLoading && (
          <GridContainer rows={3} columns={1} spacing={45}>
            <ItemList
              sectionTitle="FAVORITOS"
              items={favorites}
              handleAction={handleRemoveFromFavorites}
              emptyListMessage="Ups, parece que esto esta muy vacio. Añade algunos favoritos!"
              isFavorite
            />
            {data?.categories.map((category) => (
              <ItemList
                key={category.title}
                sectionTitle={category.title}
                items={category.items}
                handleAction={(item) =>
                  handleAddToFavorites(item, category.title)
                }
              />
            ))}
          </GridContainer>
        )}
      </>
    </CenteredContainer>
  );
};

export default Categories;
