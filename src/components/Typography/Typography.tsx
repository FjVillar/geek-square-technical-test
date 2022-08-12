import styled from "@emotion/styled";
import { FC } from "react";

type Variant = "title" | "section" | "caption" | "button";

type VariantStyle = {
  fontSize: number;
  fontWeight?: number;
  fontFamily?: string;
  fontStyle?: string;
};

const commonStyles = {
  fontFamily: "arial",
};

const stylesByVariant: Record<Variant, VariantStyle> = {
  title: { fontSize: 14, fontWeight: 600 },
  section: { fontSize: 22, fontWeight: 800 },
  caption: { fontSize: 10 },
  button: { fontSize: 12, fontWeight: 700 },
};

type Color = "primary" | "secondary" | "delete";

export const colors: Record<Color, string> = {
  primary: "rgb(0,0,0)",
  secondary: "rgb(255,255,255)",
  delete: "rgb(89, 84, 80)",
};

interface TypographyProps {
  variant: Variant;
  children: string;
  color?: Color;
}

const StyledDiv = styled("div")<TypographyProps>(({ variant, color }) => ({
  ...stylesByVariant[variant],
  ...commonStyles,
  color: color && colors[color],
}));

const Typography: FC<TypographyProps> = ({
  children,
  variant,
  color = "primary",
}) => (
  <StyledDiv variant={variant} color={color}>
    {children}
  </StyledDiv>
);

export default Typography;
