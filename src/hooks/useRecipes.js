import { useEffect, useState } from "react";
import axios from "axios";

function useRecipes(query) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      setData([]);
      setLoading(false);
      setError(null);
      return;
    }

    const timeoutId = setTimeout(async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(
            trimmedQuery
          )}`
        );

        setData(response.data.meals || []);
      } catch (err) {
        setError("Unable to fetch recipes. Please try again.");
        setData([]);
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [query]);

  return {
    data,
    loading,
    error,
  };
}

export default useRecipes;