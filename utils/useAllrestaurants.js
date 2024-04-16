import {useState,useEffect} from "react"

const useAllrestaurants = (props) => {
    const [allRestaurants, setAllRestaurants] = useState([]);
const [filteredRestaurants, setFilteredRestaurants] = useState([]);
console.log(allRestaurants);
console.log(filteredRestaurants);
//  console.log(restaurants); 
useEffect(()=>{
  getRestaurants();
},[])
async function getRestaurants() {
  // handle the error using try... catch
  try {
    const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9932496&lng=77.7000483&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await response.json();

    // initialize checkJsonData() function to check Swiggy Restaurant data
    async function checkJsonData(jsonData) {
      for (let i = 0; i < jsonData?.data?.cards.length; i++) {

        // initialize checkData for Swiggy Restaurant data
        let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        // if checkData is not undefined then return it
        if (checkData !== undefined) {
          return checkData;
        }
      }
    }

    // call the checkJsonData() function which return Swiggy Restaurant data
    const resData = await checkJsonData(json);

    // update the state variable restaurants with Swiggy API data
    setAllRestaurants(resData);
    setFilteredRestaurants(resData);
  } catch (error) {
    console.log(error);
  }
}
console.log('render');


  return {allRestaurants,filteredRestaurants,setFilteredRestaurants};
};

export default useAllrestaurants;
