import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
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
      </div>

      <div className="recipe-card-content">
        <p className="recipe-area">
          {recipe.strArea || "International"}
        </p>

        <h2>{recipe.strMeal}</h2>

        <Link
          to={`/recipes/${recipe.idMeal}`}
          className="view-recipe"
        >
          View Recipe
          <span>→</span>
        </Link>
      </div>
    </article>
  );
}

export default RecipeCard;