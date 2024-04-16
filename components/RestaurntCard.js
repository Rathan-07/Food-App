import { IMG_CDN_URL } from "../contants";
import ReactStarRatings from 'react-star-ratings';
// import { restaurntList } from "../contants";
const RestaurntCard = ({ name, cuisines, cloudinaryImageId, avgRating,sla:{lastMileTravel}}) => {
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img   className="rounded-lg"
      src={IMG_CDN_URL + cloudinaryImageId} 
      alt='img' />
      <h2 className="font-bold py-4 text-lg">{name}</h2>
      <h3>{cuisines.join(', ')}</h3>
      <ReactStarRatings
        rating={avgRating}
        starDimension="20px"
        starSpacing="2px"
        starRatedColor="gold"
      />
      <h3>{lastMileTravel +' kms'}</h3>
    </div>
  );
};
    export default RestaurntCard;