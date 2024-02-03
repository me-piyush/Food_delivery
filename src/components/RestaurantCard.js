import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;


  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData?.info;

  return (
    <div 
    data-testid="resCard"
    className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-300">
      <br />
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

export const withVegLabel = (RestaurantCard) => {
  return (props) => {
    const label= "Veg🟢";
    //console.log(props);
  return(
    <div>
      <label className="absolute bg-gray-100 text-gray-900 mx-4  rounded-lg">{label}</label>
      <RestaurantCard {...props} />
    </div>
  );
  }
  ;
};

export default RestaurantCard;
