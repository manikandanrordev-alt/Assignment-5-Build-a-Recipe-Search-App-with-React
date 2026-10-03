import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

function RecipeChart({ recipes }) {
  const categoryCount = recipes.reduce((acc, recipe) => {
    const category = recipe.strCategory || "Other";

    acc[category] = (acc[category] || 0) + 1;

    return acc;
  }, {});

  const chartData = Object.entries(categoryCount).map(
    ([name, value]) => ({
      name,
      value,
    })
  );

  if (!chartData.length) {
    return null;
  }

  const colors = [
    "#b77b45",
    "#1c1c1c",
    "#8c7661",
    "#c9a27e",
    "#77736d",
    "#d8c3ae",
  ];

  return (
    <section className="recipe-analytics">
      <div className="analytics-heading">
        <div>
          <p className="eyebrow">RECIPE INSIGHTS</p>
          <h2>What's in your results?</h2>
        </div>

        <span>{recipes.length} recipes</span>
      </div>

      <div className="analytics-content">
        <div className="chart-wrapper">
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={65}
                outerRadius={105}
                paddingAngle={3}
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={entry.name}
                    fill={colors[index % colors.length]}
                  />
                ))}
              </Pie>

              <Tooltip
                formatter={(value, name) => [
                  `${value} recipes`,
                  name,
                ]}
              />

              <Legend
                verticalAlign="bottom"
                height={30}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="analytics-summary">
          <p>
            Category distribution
          </p>

          {chartData.map((category) => {
            const percentage = Math.round(
              (category.value / recipes.length) * 100
            );

            return (
              <div
                className="category-row"
                key={category.name}
              >
                <div>
                  <span>{category.name}</span>
                  <strong>{percentage}%</strong>
                </div>

                <div className="category-bar">
                  <span
                    style={{
                      width: `${percentage}%`,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default RecipeChart;