import { Link } from "react-router-dom";

function RecipeCard({
  recipe,
  onFavourite,
  isFavourite,
}) {
  return (
    <article className="recipe-card">
      <div className="recipe-image-wrapper">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="recipe-image"
        />

        <span className="recipe-category">
          {recipe.strCategory || "Recipe"}
        </span>

        <button
          type="button"
          className={`favourite-button ${
            isFavourite ? "saved" : ""
          }`}
          onClick={() => onFavourite(recipe)}
          aria-label={
            isFavourite
              ? "Remove from favourites"
              : "Save to favourites"
          }
        >
          {isFavourite ? "♥" : "♡"}
        </button>
      </div>

      <div className="recipe-card-content">
        <p className="recipe-area">
          {recipe.strArea || "International"}
        </p>

        <h2>{recipe.strMeal}</h2>

        <div className="recipe-card-actions">
          <Link
            to={`/recipes/${recipe.idMeal}`}
            className="view-recipe"
          >
            View Recipe
            <span>→</span>
          </Link>

          <button
            type="button"
            className="save-button"
            onClick={() => onFavourite(recipe)}
          >
            {isFavourite
              ? "Saved"
              : "Save"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default RecipeCard;