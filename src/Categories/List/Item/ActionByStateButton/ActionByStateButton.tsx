import styled from "@emotion/styled";
import { FC } from "react";
import { Typography } from "../../../../components/Typography";
import { colors } from "../../../../components/Typography/Typography";

const buttonCommonStyles = {
  padding: "8px",
  cursor: "pointer",
};

const RemoveFavoriteButton = styled("button")({
  ...buttonCommonStyles,
  backgroundColor: "rgb(255,255,255)",
  border: `1px solid ${colors.delete}`,
});

const AddFavoriteButton = styled("button")({
  ...buttonCommonStyles,
  backgroundColor: "rgb(0,0,0)",
  border: "none",
});

interface ActionByStateButtonProps {
  isFavorite?: boolean;
  handleAction: () => void;
}

const ActionByStateButton: FC<ActionByStateButtonProps> = ({
  isFavorite,
  handleAction,
}) =>
  isFavorite ? (
    <RemoveFavoriteButton onClick={handleAction}>
      <Typography variant="button">Eliminar favoritos </Typography>
    </RemoveFavoriteButton>
  ) : (
    <>
      <AddFavoriteButton onClick={handleAction}>
        <Typography variant="button" color="secondary">
          Favoritos
        </Typography>
      </AddFavoriteButton>
    </>
  );

export default ActionByStateButton;
