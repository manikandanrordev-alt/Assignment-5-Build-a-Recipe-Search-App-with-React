import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";

function RecipeDetail() {
  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRecipe() {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );

        const meal = response.data.meals?.[0];

        if (!meal) {
          setError("Recipe not found.");
          return;
        }

        setRecipe(meal);
      } catch (err) {
        setError("Unable to load the recipe. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchRecipe();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <main className="detail-message">
        <div className="message-card">
          <span>!</span>

          <div>
            <h3>Unable to load recipe</h3>
            <p>{error}</p>
          </div>
        </div>

        <Link to="/recipes" className="back-link">
          ← Back to Recipes
        </Link>
      </main>
    );
  }

  return (
    <main className="recipe-detail-page">
      <div className="detail-container">
        <Link to="/recipes" className="back-link">
          ← Back to Recipes
        </Link>

        <section className="recipe-detail">
          <div className="detail-image-wrapper">
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="detail-image"
            />

            <span className="detail-category">
              {recipe.strCategory || "Recipe"}
            </span>
          </div>

          <div className="detail-content">
            <p className="eyebrow">
              {recipe.strArea || "International"} CUISINE
            </p>

            <h1>{recipe.strMeal}</h1>

            <p className="detail-description">
              Discover the ingredients and step-by-step instructions
              for preparing this delicious dish.
            </p>

            <div className="detail-meta">
              <div>
                <span>Category</span>
                <strong>{recipe.strCategory || "N/A"}</strong>
              </div>

              <div>
                <span>Cuisine</span>
                <strong>{recipe.strArea || "N/A"}</strong>
              </div>
            </div>

            {recipe.strYoutube && (
              <a
                href={recipe.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className="youtube-link"
              >
                Watch Recipe Video ↗
              </a>
            )}
          </div>
        </section>

        <section className="instructions-section">
          <div className="section-heading">
            <p className="eyebrow">PREPARATION</p>
            <h2>How to make it</h2>
          </div>

          <div className="instructions">
            {recipe.strInstructions
              .split("\r\n")
              .filter(Boolean)
              .map((step, index) => (
                <div className="instruction-step" key={index}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{step}</p>
                </div>
              ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default RecipeDetail;