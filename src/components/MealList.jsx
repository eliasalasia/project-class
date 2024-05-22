import React from "react"
export const MealList = ({ meals }) => {
    return (
        
        <ul className="flex-grow bg-cyan-900 min-h-screen p-8 overflow-auto grid grid-cols-4 gap-8">
          {
            meals?.meals &&
            meals.meals.map( meal =>
              <li 
              key={meal.idMeal}
              className="w-60 h-72 rounded-md overflow-hidden border bottom-2 hover:shadow-xl cursor-pointer active:right-3"
              >
              <figure className="w-full h-[220px] overflow-hidden">
                <img src={meal.strMealThumb} alt="" />
              </figure>
              <h2 className="py-2 text-2xl text-gray-400 text-center">{meal.strMeal}</h2>
            </li>

            )
          }
         
        </ul>
    )
}