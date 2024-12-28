import { useDispatch, useSelector } from "react-redux";
import ItemListM from "./ItemListM";
import { clearCart } from "../utils/cartSlice";


const CartVZ=()=>{
 
    const cartItems=useSelector((store)=>store.cart.items)

    const dispatch=useDispatch();
     const handlecc=()=>{
        dispatch(clearCart());
     };

    return (
        <div className=" text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
            <button className="p-2 m-2 bg bg-black rounded-md text-white" onClick={handlecc}>Clear Cart</button>
            {cartItems.length===0 && <h1>Cart Is Empty</h1>}
            <ItemListM items={cartItems}/>
            </div>
        </div>
    )
};

export default CartVZ;