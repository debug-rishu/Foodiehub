import { useState } from 'react';
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResCategory from "./ResCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestroMenu =()=>{
    
   // const [resInfo,setResInfo]=useState(null);
    const {resId}=useParams();
    
    const resInfo=useRestaurantMenu(resId);
 
     const [showIndex,setShowIndex]=useState(null);
     
    // useEffect(()=>{
    // fetchMenu();              
    // },[]);
    
    // const fetchMenu= async ()=>{
    //  const data=await fetch(Menures_URL+resId);
      
    //     const json =await data.json();
    //     setResInfo(json.data);

    // };

 if(resInfo===null){
   return <Shimmer/>
 }

 const {name,cuisines,
    costForTwoMessage
    }=resInfo?.cards[2]?.card?.card?.info;


 const {itemCards}  =resInfo?.cards[4]?.groupedCard?.
 cardGroupMap?.REGULAR?.cards[2]?.card?.card;
      
  const category=resInfo?.cards[4]?.groupedCard?.
  cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory");
     
 

    return(
        <div className="menu text-center">
            <h1 className="font-bold my-5 text-2xl">{name}</h1>
            <p className="text-lg font-bold">{cuisines.join(", ")} - { costForTwoMessage}</p>
            {/* <ul>
                {
                 itemCards.map(item=>
                    <li key={item.card.info.id}>
                       
                    { item.card.info.name} - {"Rs  "}
                    { item.card.info.price/100||  item.card.info.defaultPrice/100}
                    </li>
                 )
                }
            </ul> */}
                {
                    //lifting state up
                    category.map((eachcat,index)=><ResCategory key={eachcat.card.card.title}  data={eachcat?.card?.card.categories}showitems={index === showIndex ? true:false }  setShowIndex={()=>setShowIndex(index)}/>
                    )
                }


        </div>
    )
}

export default RestroMenu;