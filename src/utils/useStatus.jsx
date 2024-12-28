import { useEffect, useState } from "react";
//custom hooks
const useStatus=()=>{

    const [onlineStatus,setOnlineStatus]=useState(true);

    useEffect(()=>{
      window.addEventListener("offline",()=>{
        setOnlineStatus(false);
      })
    },[])

    return onlineStatus;
};

export default useStatus;