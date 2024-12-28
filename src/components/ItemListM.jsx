import { useDispatch } from "react-redux";
import { CON_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";

const ItemListM=({items})=>{

    const dispatch =useDispatch();

    const handleAddItem=(items)=>{
        //dispatch an action
        dispatch(addItems(items));
    }

    return(
        <div>
           {items.map((items=>(
            <div  data-testid="fooditems" key={items.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
             
              <div className="w-9/12">
            <div className="py-2">
            <span className="">{items.card.info.name}</span>
            <span>- ₹ {items.card.info.price/100}</span>
            </div>      
            <p className="text-xs">{items.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4">  
            
            <div  className="absolute mx-20 my-20">
            <button   className="p-2  cursor-pointer rounded-lg bg-white  text-black shadow-lg  m-auto" onClick={()=> handleAddItem(items)}>
            ADD +
            </button>
            </div>
            <img src={CON_URL+items.card.info.imageId} className="w-full "></img>
            </div>
        </div>
            )
            
           ))}

        </div>
    )
}

export default ItemListM;