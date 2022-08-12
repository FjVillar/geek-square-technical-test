import { FC } from "react";
import { CategoryItem } from "../../Categories/types";
import { Item } from "../Item";

interface ItemListProps {
  items: CategoryItem[];
}

const ItemList: FC<ItemListProps> = ({ items }) => (
  <>
    {items.map(({ id, image_url, title, description }) => (
      <Item
        key={id}
        imageUrl={image_url}
        title={title}
        description={description}
      />
    ))}
  </>
);

export default ItemList;
