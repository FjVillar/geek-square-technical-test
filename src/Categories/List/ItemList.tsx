import styled from "@emotion/styled";
import { FC } from "react";
import { CategoryItem } from "../../Categories/types";
import { GridContainer } from "../../components/GridContainer";
import Item from "./Item/Item";
import { Typography } from "../../components/Typography";
import { ActionByStateButton } from "./Item/ActionByStateButton";

const StyledGridContainer = styled(GridContainer)({
  overflowY: "hidden",
  overflowX: "auto",
  // This styles only works on Chrome and Safari
  // in real case scenario we would need to add
  // styles for chrome and IE
  "::-webkit-scrollbar": {
    width: "6px",
    height: "6px",
  },
  "::-webkit-scrollbar-track": {
    borderRadius: "10px",
    background: "rgba(0,0,0,0.1)",
  },
  "::-webkit-scrollbar-thumb": {
    borderRadius: "10px",
    background: "rgba(0,0,0,0.2)",
  },
  "::-webkit-scrollbar-thumb:hover": {
    background: "rgba(0,0,0,0.4)",
  },
  "::-webkit-scrollbar-thumb:active": {
    background: "rgba(0,0,0,.9)",
  },
});

interface ItemListProps {
  items: CategoryItem[];
  sectionTitle: string;
  isFavorite?: boolean;
  emptyListMessage?: string;
  handleAction: (item: CategoryItem) => void;
}

const ItemList: FC<ItemListProps> = ({
  items,
  sectionTitle,
  isFavorite,
  emptyListMessage = "Ups, parece que esto esta vacio",
  handleAction,
}) => {
  const handleActionByState = (item: CategoryItem) => {
    handleAction(item);
  };

  return (
    <>
      <Typography variant="section">{sectionTitle}</Typography>
      <StyledGridContainer
        columns={items.length}
        rows={1}
        spacing={20}
        columnSize={200}
      >
        {items.map(({ id, image_url, title, description }) => (
          <Item
            key={id}
            imageUrl={image_url}
            title={title}
            description={description}
            actionButton={
              <ActionByStateButton
                isFavorite={isFavorite}
                handleAction={() =>
                  handleActionByState({ id, image_url, title, description })
                }
              />
            }
          />
        ))}
        {items.length === 0 && `${emptyListMessage}`}
      </StyledGridContainer>
    </>
  );
};

export default ItemList;
