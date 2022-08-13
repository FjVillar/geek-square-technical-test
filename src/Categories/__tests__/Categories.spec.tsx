import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { App } from "../../App";

describe("Categories tests suite", () => {
  test("Should add two favorites and delete one", async () => {
    render(<App />);

    const laSombraDelVientoBook = await waitFor(() =>
      screen.getByText("La sombra del viento")
    );
    const laSombraDelVientoFavoriteButton =
      laSombraDelVientoBook.parentElement?.querySelector("button");

    if (laSombraDelVientoFavoriteButton) {
      // Adds favorite
      fireEvent.click(laSombraDelVientoFavoriteButton);
    }

    const heartstopperComic = await waitFor(() =>
      screen.getByText("Heartstopper - Tomo 1")
    );
    const heartstopperFavoriteButton =
      heartstopperComic.parentElement?.querySelector("button");

    if (heartstopperFavoriteButton) {
      // Adds favorite
      fireEvent.click(heartstopperFavoriteButton);
    }

    const minionsFilm = await waitFor(() =>
      screen.getByText("Minions: The Rise of Gru")
    );
    const minionsButton = minionsFilm.parentElement?.querySelector("button");

    if (minionsButton) {
      // Deletes Favorites
      fireEvent.click(minionsButton);
    }

    const favoriteList = screen.getByText("FAVORITOS").nextElementSibling;

    const [minionsFilmInFavoriteList, minionsInCategoryList] =
      screen.queryAllByTestId("Minions: The Rise of Gru");

    const [heartStopperComicInFavoriteList, heartStopperComicInCategoryList] =
      screen.queryAllByTestId("Heartstopper - Tomo 1");

    const [
      laSombraDelVientoBookInFavoriteList,
      laSombraDelVientoBookInCategoryList,
    ] = screen.queryAllByTestId("La sombra del viento");

    // This assertions to ensure that the new favorites are in the favorite list
    expect(heartStopperComicInCategoryList).toBeInTheDocument();
    expect(favoriteList).toContainElement(heartStopperComicInFavoriteList);

    expect(minionsInCategoryList).toBeInTheDocument();
    expect(favoriteList).toContainElement(minionsFilmInFavoriteList);

    expect(laSombraDelVientoBookInCategoryList).toBeInTheDocument();
    expect(favoriteList).toContainElement(laSombraDelVientoBookInFavoriteList);

    const deleteHeartStopperFromFavoritesButton =
      heartStopperComicInCategoryList.querySelector("button");

    if (deleteHeartStopperFromFavoritesButton) {
      fireEvent.click(deleteHeartStopperFromFavoritesButton);
    }

    waitFor(() =>
      expect(favoriteList).not.toContainElement(heartStopperComicInFavoriteList)
    );
  });
});
