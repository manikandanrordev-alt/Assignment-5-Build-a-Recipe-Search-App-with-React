import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import RecipeDetail from "./pages/RecipeDetail";
import Favourites from "./pages/Favourites";

function App() {
  const [favourites, setFavourites] = useState(() => {
    try {
      const savedFavourites = localStorage.getItem(
        "recipe-favourites"
      );

      return savedFavourites
        ? JSON.parse(savedFavourites)
        : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      "recipe-favourites",
      JSON.stringify(favourites)
    );
  }, [favourites]);

  function toggleFavourite(recipe) {
    setFavourites((currentFavourites) => {
      const exists = currentFavourites.some(
        (item) => item.idMeal === recipe.idMeal
      );

      if (exists) {
        return currentFavourites.filter(
          (item) => item.idMeal !== recipe.idMeal
        );
      }

      return [...currentFavourites, recipe];
    });
  }

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/recipes"
          element={
            <Recipes
              favourites={favourites}
              onFavourite={toggleFavourite}
            />
          }
        />

        <Route
          path="/recipes/:id"
          element={
            <RecipeDetail
              favourites={favourites}
              onFavourite={toggleFavourite}
            />
          }
        />

        <Route
          path="/favourites"
          element={
            <Favourites
              favourites={favourites}
              onFavourite={toggleFavourite}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;