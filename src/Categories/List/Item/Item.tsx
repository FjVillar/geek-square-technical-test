import styled from "@emotion/styled";
import { FC, ReactElement } from "react";
import { GridContainer } from "../../../components/GridContainer";
import { Typography } from "../../../components/Typography";

const StyledImg = styled("img")({
  objectFit: "cover",
  width: "100%",
  height: "100%",
});

interface ItemProps {
  imageUrl: string;
  title: string;
  description: string;
  category: string;
  actionButton: ReactElement;
}

const Item: FC<ItemProps> = ({
  imageUrl,
  title,
  description,
  category,
  actionButton,
}) => (
  <GridContainer rows={[300, 35, 100, 35, 35]} columns={1} spacing={10}>
    <StyledImg src={imageUrl} />
    <Typography variant="title">{title}</Typography>
    <Typography variant="caption">{description}</Typography>
    <Typography variant="caption">{category}</Typography>
    {actionButton}
  </GridContainer>
);

export default Item;
