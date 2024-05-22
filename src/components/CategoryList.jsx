import React, { useEffect, useState } from "react"

export const CategoryList = ({data, setSelectedCategory}) =>{

    const [filteredData, setFilteredData] = useState([])

    useEffect(()=>{
        setFilteredData(data.categories)
      },[data])


      const searchCategory = (e) => {
        let value = e.target.value.toLowerCase();
        const rs = data.categories.filter(category => category.strCategory.toLowerCase().includes(value));
        setFilteredData(rs);
        
      }

    return(
        <>
        <input 
        type="text" 
        onChange={searchCategory} 
        className="w-full outline-none bg-transparent shadow-md border h-9 round-md px-4" placeholder="Search Category"
         />

        <ul className="w-full text-gray-300 flex-grow">

          {filteredData && 
          filteredData.map(category => 
            <li 
            key={category.idCategory}
            onClick={() => {setSelectedCategory(category.strCategory)}}
            className="cursor-pointer px-4 rounded-md hover:bg-sky-600 py-1 active:bg-sky-950 flex justify-between">
              <span>{category.strCategory}</span>

              <img src={category.strCategoryThumb} alt="" className="w-8"/>
            </li>
          )}
        </ul>
      </>
      
    )
}