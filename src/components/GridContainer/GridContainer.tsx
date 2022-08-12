import styled from "@emotion/styled";

interface StyledGridContainerProps {
  columns: number | number[];
  rows: number | number[];
  rowSize?: number;
  columnSize?: number;
  spacing?: number;
}

const GridContainer = styled("div")<StyledGridContainerProps>(
  ({ columns, rowSize, rows, columnSize, spacing }) => {
    let gridTemplateColumns: string;
    let gridTemplateRows: string;

    // if columns is an array
    if (columns instanceof Object) {
      gridTemplateColumns = `${columns
        .map((column) => `${column}px `)
        .join("")}`;
      console.log("gridTemplateColumns", gridTemplateColumns);
    } else {
      gridTemplateColumns = `repeat(${columns}, ${
        columnSize ? `${columnSize}px` : "auto"
      })`;
    }

    // if rows is an array
    if (rows instanceof Object) {
      gridTemplateRows = `${rows.map((row) => `${row}px `).join("")}`;
      console.log("gridTemplateColumns", gridTemplateColumns);
    } else {
      gridTemplateRows = `repeat(${rows}, ${
        rowSize ? `${rowSize}px` : "auto"
      })`;
    }

    return {
      display: "grid",
      gridTemplateColumns,
      gridTemplateRows,
      gridGap: spacing ? `${spacing}px` : "10px",
      justifyItems: "self-start",
    };
  }
);

export default GridContainer;
