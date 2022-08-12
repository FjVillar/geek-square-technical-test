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
  maxHeight: "100%",
});

const Item: FC<ItemProps> = ({ imageUrl, title, description }) => (
  <GridContainer rows={[255, 30, 200]} columns={1}>
    <StyledImg src={imageUrl} />
    <Typography variant="title">{title}</Typography>
    <Typography variant="caption">{description}</Typography>
    {/* Action by status component */}
  </GridContainer>
);

export default Item;
