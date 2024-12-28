import { useState } from "react";
import ItemListM from "./ItemListM";

 const ResCategory=({data,showitems,setShowIndex})=>{   
   const handleClick=()=>{
    setShowIndex();
   }

     return(
       <> 
         {data.map((res,index)=>
            (
              <div key={index}>
              <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
              <div className="flex justify-between cursor-pointer " onClick={handleClick}>        
              <span className=" font-bold text-lg ">{res.title} ({res.itemCards.length}) </span>
              <span>🔽</span>
              </div>
            {showitems &&  <ItemListM items={res.itemCards}/>}
              </div>
                
              </div>
        
            ))};
            </>
        );

    };
    
 export default ResCategory;