import { CON_URL } from "../utils/constants";

  const  RestaurantCard=(props)=>{
    const{resdata}=props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo}=resdata?.info ||{};
  

  return (
      <div  data-testid="rescard" className="res-card m-4 p-4 w-[250px] rounded-lg bg bg-gray-100 hover:bg-slate-400 ">
        <img  className="rounded-lg"alt="res-logo"src={CON_URL+cloudinaryImageId}></img>
      <h3 className="font-bold py-4 text-lg"> {name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{resdata.info.sla.deliveryTime} mins </h4>
      </div>  
    )
  };



  export const isOpen=(RestaurantCard)=>{
   return(props)=>{
    
    return(
      <div>
        <label className="absolute bg bg-black text-white m-1 rounded-md">Open</label>
        <RestaurantCard {...props}/>
      </div>
    );
   };
  };

  export default RestaurantCard;