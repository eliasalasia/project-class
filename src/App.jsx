import { useEffect, useState } from 'react';
import { Aside } from './components/Aside';
import { MealList } from './components/MealList';

function App() {
  const [data, setData] = useState([])
  const [meals, setMeals] = useState ([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const getData = async (url, callBack)=> {
    const rs = await fetch(url)
    const jsonRs = await rs.json();
    callBack(jsonRs)
  }

  useEffect(()=>{
    getData('https://www.themealdb.com/api/json/v1/1/categories.php', setData)
  },[])

  useEffect(()=>{
    if(selectedCategory !== ''){
      getData(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`, setMeals)
    }
  },[selectedCategory])

  return (
    <>
      <div className="w-full min-h-screen flex">
       
        <Aside data={data} setSelectedCategory={setSelectedCategory}/>

        <MealList meals={meals}/>
        
      </div>

       
    </>
  );
}

export default App;