import styled from "@emotion/styled";
import { FC } from "react";
import { GridContainer } from "../../../components/GridContainer";
import { Typography } from "../../../components/Typography";

interface ItemProps {
  imageUrl: string;
  title: string;
  description: string;
}

const StyledImg = styled("img")({
  objectFit: "cover",
  width: "100%",
  height: "100%",
});

const Item: FC<ItemProps> = ({ imageUrl, title, description }) => (
  <GridContainer rows={[300, 35, 100]} columns={1} spacing={10}>
    <StyledImg src={imageUrl} />
    <Typography variant="title">{title}</Typography>
    <Typography variant="caption">{description}</Typography>
    {/* Action by status component */}
  </GridContainer>
);

export default Item;
