import React, { useEffect, useState } from "react";

const MealDetails = ({ meal }) => {
  const [mealDetails, setMealDetails] = useState(null);

  useEffect(() => {
    const fetchMealDetails = async () => {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal.strMeal}`
      );
      const data = await response.json();
      setMealDetails(data.meals[0]);
    };

    fetchMealDetails();
  }, [meal]);

  if (!mealDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="meal-details p-4 bg-yellow-800 rounded shadow-md w-6/12 h-4/6 mb-4 mx-auto">
      <h2 className="text-3xl font-bold mb-4">{mealDetails.strMeal}</h2>
      <img src={mealDetails.strMealThumb} alt={mealDetails.strMeal} className="w-full h-auto rounded mb-4" />
      <p className="mb-4">{mealDetails.strInstructions}</p>
      <ul className="list-disc pl-5">
        {Object.keys(mealDetails)
          .filter((key) => key.startsWith("strIngredient") && mealDetails[key])
          .map((key) => (
            <li key={key}>{mealDetails[key]}</li>
          ))}
      </ul>
    </div>
  );
};

export default MealDetails;