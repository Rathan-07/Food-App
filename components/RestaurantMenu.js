

import {useParams} from "react-router-dom"
import {IMG_CDN_URL, ITEM_IMG_CDN_URL } from "../contants";
import Shimmer from "./Shimmer";

import useRestaurant from "../utils/useRestaurant";

  const RestaurantMenu = () => {
    const { resId } = useParams(); 
    const { restaurant, menuItems } = useRestaurant(resId);
   
  
    return (!restaurant ) ? (
      <Shimmer />
    ) : (
      <div className="restaurant-menu mt-20 min-h-[80] w-auto">
        <div className="restaurant-summary flex h-[200] justify-center items-center bg-slate-900 text-white">
          <img
            className="restaurant-img w-64 h-44 border-r-4"
            src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
            alt={restaurant?.name}
          />
          <div className="restaurant-summary-details flex flex-col w-520px m-5 font-medium">
            <h2 className="restaurant-title text-4xl  max-w-lg
            ">{restaurant?.name}</h2>
            <p className="restaurant-tags whitespace-nowrap text-opacity-70 text-base md:text-lg lg:text-xl text-gray-700">{restaurant?.cuisines?.join(", ")}</p>
            <div className="restaurant-details flex mt-4 justify-between items-center text-lg font-semibold pb-2 max-w-xs">
              <div className="restaurant-rating" style={
              (restaurant?.avgRating) < 4
                ? { backgroundColor: "var(--light-red)" }
                : (restaurant?.avgRating) === "--"
                ? { backgroundColor: "white", color: "black" }
                : { color: "white" }
            }>
              <i className="fa-solid fa-star flex items-center p-2 gap-2 bg-dark-green rounded-md"></i>
                <span>{restaurant?.avgRating}</span>
              </div>
              <div className="restaurant-rating-slash">|</div>
              <div>{restaurant?.sla?.slaString}</div>
              <div className="restaurant-rating-slash">|</div>
              <div>{restaurant?.costForTwoMessage}</div>
            </div>
          </div>
        </div>
  
        <div className="restaurant-menu-content flex justify-center">
          <div className="menu-items-container mt-8 w-[850]">
            <div className="menu-title-wrap p-5">
              <h3 className="menu-title">Recommended</h3>
              <p className="menu-count mt-14 leading-[1.3] text-[rgba(40, 44, 63, 0.45)] tracking-[0.3px] text-base">
                {menuItems.length} ITEMS
              </p>
            </div>
            <div className="menu-items-list flex flex-col justify-center">
              {menuItems.map((item) => (
                <div className="menu-item flex justify-between max-h-72 p-5 border-b border-[rgba(40, 44, 63, 0.45)]" key={item?.id}>
                  <div className="menu-item-details flex flex-col self-start overflow-hidden">
                    <h3 className="item-title w-3/5">{item?.name}</h3>
                    <p className="item-cost">
                      {item?.price > 0
                        ? new Intl.NumberFormat("en-IN", {
                            style: "currency",
                            currency: "INR",
                          }).format(item?.price / 100)
                        : " "}
                    </p>
                    <p className="item-desc mt-14 leading-[1.3] text-[rgba(40, 44, 63, 0.45)] w-60/100 tracking-[0.3px] text-base">{item?.description}</p>
                  </div>
                  <div className="menu-img-wrapper">
                    {item?.imageId && (
                      <img
                        className="menu-item-img"
                        src={ITEM_IMG_CDN_URL + item?.imageId}
                        alt={item?.name}
                      />
                    )}
                    <button className="add-btn bg-orange text-text-color px-6 py-2 cursor-pointer outline-none border border-orange-400 mt-3 rounded-md"> ADD +</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };


export default RestaurantMenu;

