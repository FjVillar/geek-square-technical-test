import styled from "@emotion/styled";
import { FC } from "react";

type Variant = "title" | "section" | "caption";

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
};

interface TypographyProps {
  variant: Variant;
  children: string;
}

const StyledDiv = styled("div")<TypographyProps>(({ variant }) => ({
  ...stylesByVariant[variant],
  ...commonStyles,
}));

const Typography: FC<TypographyProps> = ({ children, variant }) => (
  <StyledDiv variant={variant}>{children}</StyledDiv>
);

export default Typography;
