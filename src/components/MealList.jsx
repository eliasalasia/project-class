import React, { useState } from "react";
import MealDetails from "./MealDetails";

export const MealList = ({ meals }) => {
  const [selectedMeal, setSelectedMeal] = useState(null);

  const handleMealClick = (meal) => {
    setSelectedMeal(meal);
  };

  const handleBackToList = () => {
    setSelectedMeal(null);
  };

  return (
    <div className="flex-grow bg-yellow-600 min-h-screen p-8 overflow-auto">
      {selectedMeal ? (
        <div>
          <button onClick={handleBackToList} className="mb-4 p-2 bg-yellow-900 text-white rounded">Back to List</button>
          <MealDetails meal={selectedMeal} />
        </div>
      ) : (
        <ul className="grid grid-cols-4 gap-8">
          {meals?.meals &&
            meals.meals.map((meal) => (
              <li
                key={meal.idMeal}
                className="w-60 h-72 rounded-md overflow-hidden border bottom-2 hover:shadow-xl cursor-pointer active:right-3"
                onClick={() => handleMealClick(meal)}
              >
                <figure className="w-full h-[220px] overflow-hidden">
                  <img src={meal.strMealThumb} alt={meal.strMeal} />
                </figure>
                <h2 className="py-2 text-2xl text-black text-center">
                  {meal.strMeal}
                </h2>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};