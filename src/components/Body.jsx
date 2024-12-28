import RestaurantCard ,{isOpen} from "./RestaurantCard";
//import resList from "../utils/mockData";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useStatus from "../utils/useStatus";

const Body= ()=>{

    const[resist,setResList]=useState([]);
    const[filterrest,setFilterrest]=useState([]);
    const [searchtext,setSearchText]=useState("");

    const Resopen=isOpen(RestaurantCard);

   // console.log("uhuj",resist)

    useEffect(()=>{
      fetchData();
    },[])
      
    const fetchData= async()=>{
      const data =await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json=await data.json();
      setResList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilterrest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
      
    const onlineStatus=useStatus();
    if(onlineStatus===false) return <h1>Looks Like You Are Offline!</h1>

    if(resist.length===0)
     { return <Shimmer/>}

    return(
      <div className="body">
        <div className="filter flex">
        <div className=" searchu m-4 p-4">

          <input  data-testid="searchee" type="text" className="border  border-solid border-black" value={searchtext} onChange={(e)=>{
            setSearchText(e.target.value);
          }}/>

          <button className="px-4 py-2 rounded-lg  bg-green-300 m-4"
          onClick={()=>{
            const filtersearch= resist.filter((restt)=>restt.info.name.toLowerCase().includes(searchtext.toLowerCase()));
            setFilterrest(filtersearch);

          }}>Search</button>
        </div >
            <div className=" searchu m-4 p-4 flex items-center"><button className="px-4 py-2 bg bg bg-gray-100 rounded-lg "
            onClick={()=>{
            
            const fil=resist.filter(
                (res)=>res.info.avgRating>=4
            );
            setResList(fil);
            }}>
                Top Rated Restaurants
                </button></div>
            
        </div>

        <div className="res-container flex flex-wrap">
          {
        filterrest.map((restaurant)=> (
      <Link key={restaurant.info.id} to={"/restro/"+restaurant.info.id}>
        {
          restaurant.info.isOpen?(<Resopen resdata={restaurant}/>): (<RestaurantCard resdata={restaurant}/>)
        }
        </Link>))
          }
        </div>
      </div>
    )
  };

  export default Body;