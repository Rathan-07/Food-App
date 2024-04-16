// import { restaurntList } from "../contants"
import RestaurntCard from "./RestaurntCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import filterData from "../utils/helper";
import useAllrestaurants from "../utils/useAllrestaurants";
import useOnline from "../utils/useOnline";




  

const Body = () => {
  const [searchText, setSearchText] = useState("");
   const {allRestaurants,filteredRestaurants,setFilteredRestaurants} = useAllrestaurants();
  
   const isOnline = useOnline();
  if(!isOnline){
    return <h1 className="offline-message">Offline, Please check your internet connection!!!</h1>;
  }
    return (allRestaurants.length ===0) ?<Shimmer/> : (
     <>
     <div className = "search-conatiner p-5 bg-pink-50 my-5 "> 
      <input 
      type="text"
       className = "search-input focus:bg-gray-100 p-1 m-1" 
       placeholder ="Search"
       value={searchText}
        onChange= {(e)=>{
          setSearchText(e.target.value)
        }}
      />
     
      <button className="search-btn p-1 m-2 bg-purple-300 rounded-lg text-sm" 
      onClick={()=>{
        const data = filterData(searchText,allRestaurants)
       setFilteredRestaurants(data)
      }}>Search button</button>

     </div>
        <div className='restaurant-List flex flex-wrap' >
        {/* {console.log(restaurants)} */}
      

           {filteredRestaurants.map((restaurant) => {
            return (
             <Link to={"/restaurant/" + restaurant?.info?.id} 
             key={restaurant?.info?.id}
             ><RestaurntCard  {...restaurant?.info} /></Link>
            );
          })}

      </div>
    
     </>
    )
  };
  export default Body;