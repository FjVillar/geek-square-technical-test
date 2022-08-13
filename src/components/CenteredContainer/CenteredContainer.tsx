import styled from "@emotion/styled";

interface CenteredContainerProps {
  isMobile: boolean;
}

const CenteredContainer = styled("div")<CenteredContainerProps>(
  ({ isMobile }) => ({
    margin: "auto",
    width: isMobile ? "90%" : "80%",
    padding: "10px",
  })
);

export default CenteredContainer;
