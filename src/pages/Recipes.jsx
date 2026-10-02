import { useState } from "react";
import useRecipes from "../hooks/useRecipes";
import RecipeCard from "../components/RecipeCard";
import Loader from "../components/Loader";

function Recipes() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const { data, loading, error } = useRecipes(query);

  function handleSubmit(e) {
    e.preventDefault();

    const trimmedSearch = search.trim();

    if (!trimmedSearch) {
      return;
    }

    setQuery(trimmedSearch);
  }

  return (
    <main className="recipes-page">
      <section className="search-hero">
        <div className="hero-content">
          <p className="eyebrow">DISCOVER • COOK • ENJOY</p>

          <h1>
            Find something
            <span> delicious.</span>
          </h1>

          <p className="hero-description">
            Explore recipes from around the world and find your
            next favourite dish.
          </p>

          <form className="search-form" onSubmit={handleSubmit}>
            <div className="search-input-wrapper">
              <span className="search-icon">⌕</span>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for chicken, pasta, dessert..."
                aria-label="Search recipes"
              />

              {search && (
                <button
                  type="button"
                  className="clear-search"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>

            <button type="submit" className="search-button">
              Search
            </button>
          </form>
        </div>
      </section>

      <section className="results-section">
        {query && (
          <div className="results-heading">
            <div>
              <p className="eyebrow">SEARCH RESULTS</p>

              <h2>
                Recipes for{" "}
                <span>"{query}"</span>
              </h2>
            </div>

            {!loading && data.length > 0 && (
              <p className="result-count">
                {data.length} recipes found
              </p>
            )}
          </div>
        )}

        {loading && <Loader />}

        {error && (
          <div className="message-card error-card">
            <span>!</span>
            <div>
              <h3>Something went wrong</h3>
              <p>{error}</p>
            </div>
          </div>
        )}

        {!loading && !error && query && data.length === 0 && (
          <div className="message-card">
            <span>⌕</span>
            <div>
              <h3>No recipes found</h3>
              <p>
                Try searching for another ingredient or dish.
              </p>
            </div>
          </div>
        )}

        {!loading && data.length > 0 && (
          <div className="recipe-grid">
            {data.map((recipe) => (
              <RecipeCard
                key={recipe.idMeal}
                recipe={recipe}
              />
            ))}
          </div>
        )}

        {!query && !loading && (
          <div className="empty-search">
            <div className="empty-icon">✦</div>
            <h2>What are you craving?</h2>
            <p>
              Search above to discover your next delicious meal.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

export default Recipes;