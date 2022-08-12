import { FC } from "react";
import { Typography } from "../Typography";

interface ItemProps {
  imageUrl: string;
  title: string;
  description: string;
}

const Item: FC<ItemProps> = ({ imageUrl, title, description }) => (
  <>
    Item
    <img src={imageUrl} />
    <Typography>{title}</Typography>
    <Typography>{description}</Typography>
    {/* Action by status component */}
  </>
);

export default Item;
