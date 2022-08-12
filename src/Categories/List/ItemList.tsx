import { FC } from "react";
import { CategoryItem } from "../../Categories/types";
import { GridContainer } from "../../components/GridContainer";
import Item from "./Item/Item";

interface ItemListProps {
  items: CategoryItem[];
}

const ItemList: FC<ItemListProps> = ({ items }) => (
  <GridContainer
    columns={3}
    rows={1}
    columnSize={200}
    rowSize={600}
    spacing={20}
  >
    {items.map(({ id, image_url, title, description }) => (
      <Item
        key={id}
        imageUrl={image_url}
        title={title}
        description={description}
      />
    ))}
  </GridContainer>
);

export default ItemList;
