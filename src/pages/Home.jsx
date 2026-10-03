import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-hero-content">
          <p className="eyebrow">YOUR NEXT FAVOURITE MEAL</p>

          <h1>
            Good food
            <br />
            <span>starts here.</span>
          </h1>

          <p className="home-description">
            Discover delicious recipes from around the world,
            explore new flavours, and save the ones you love.
          </p>

          <div className="home-actions">
            <Link to="/recipes" className="primary-button">
              Explore Recipes
              <span>→</span>
            </Link>

            <Link to="/favourites" className="secondary-button">
              View Favourites
            </Link>
          </div>
        </div>

        <div className="home-visual">
          <div className="hero-image-card">
            <img
              src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85"
              alt="Beautifully prepared food"
            />
          </div>

          <div className="floating-card">
            <span>✦</span>
            <div>
              <strong>Explore</strong>
              <p>Endless flavours</p>
            </div>
          </div>
        </div>
      </section>

      <section className="home-features">
        <div>
          <span>01</span>
          <h3>Discover</h3>
          <p>
            Search recipes by dish or ingredient and discover
            something new.
          </p>
        </div>

        <div>
          <span>02</span>
          <h3>Explore</h3>
          <p>
            Browse complete recipes with ingredients and
            preparation instructions.
          </p>
        </div>

        <div>
          <span>03</span>
          <h3>Save</h3>
          <p>
            Keep your favourite recipes together for easy
            access anytime.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home;