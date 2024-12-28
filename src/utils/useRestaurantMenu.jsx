import {useEffect,useState} from "react";
import { Menures_URL } from "../utils/constants";
const useRestaurantMenu=(resId)=>{

const [resInfo,setResInfo]=useState(null);
    useEffect(()=>{
       fetchData();
    } ,[]);

    const fetchData= async ()=>{
        const data= await fetch(Menures_URL+resId);
            const json= await data.json();
            setResInfo(json.data);
    }
 
    return resInfo;
};

export default useRestaurantMenu;