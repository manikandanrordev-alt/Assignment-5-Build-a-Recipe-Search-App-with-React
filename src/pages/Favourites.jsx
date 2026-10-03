import RecipeCard from "../components/RecipeCard";

function Favourites({ favourites, onFavourite }) {
  return (
    <main className="favourites-page">
      <section className="favourites-header">
        <p className="eyebrow">YOUR COLLECTION</p>

        <h1>
          Saved <span>Recipes.</span>
        </h1>

        <p>
          Your favourite recipes, all in one place.
        </p>
      </section>

      <section className="favourites-content">
        {favourites.length === 0 ? (
          <div className="empty-favourites">
            <div className="empty-favourite-icon">
              ♡
            </div>

            <h2>No favourites yet</h2>

            <p>
              Save recipes you love and they'll appear here.
            </p>
          </div>
        ) : (
          <>
            <div className="favourites-count">
              {favourites.length}{" "}
              {favourites.length === 1
                ? "recipe"
                : "recipes"}{" "}
              saved
            </div>

            <div className="recipe-grid">
              {favourites.map((recipe) => (
                <RecipeCard
                  key={recipe.idMeal}
                  recipe={recipe}
                  onFavourite={onFavourite}
                  isFavourite={true}
                />
              ))}
            </div>
          </>
        )}
      </section>
    </main>
  );
}

export default Favourites;