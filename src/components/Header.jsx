import { LOGO_URL } from "../utils/constants";
import { useState,useContext} from "react";
import { Link } from "react-router";
import useStatus from "../utils/useStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header=() =>{

 
  const [btnNamer,setbtnNamer]=useState("Login");

  
  const onlineStatus=useStatus();

  const {loggedInUser} =useContext(UserContext);

  const cartItems=useSelector((store)=>store.cart.items)

    return(
      <div className="flex h-50  justify-between m-2 bg-pink-200 shadow-md sm:bg-yellow-50 lg:bg-green-50" >
        <div className="logo-container">
          <img className="w-40 h-40 " src={LOGO_URL}></img>
          </div>
          <div className="flex items-center ">
            <ul className="flex p-4 m-2">
              <li className="px-4">
                Online Status:{onlineStatus? "🟩": "⭕"}
              </li>
              <li className="px-4"><Link to="/">Home</Link></li>
              <li className="px-4"><Link to="/about">About Us</Link></li>
              <li className="px-4">
                <Link to="/contact">Contact Us</Link></li>
                <li className="px-4">
                <Link to="/grocery">Grocery Mart</Link></li>
              <li className="px-4 font-bold">
                <Link to="/cart">
                 Cart({cartItems.length})</Link>
                 </li>
              <button className="login bg-red-300" onClick={()=>{
                btnNamer==='Login'?
                setbtnNamer("Logout"):
                setbtnNamer("Login")
              }} >
              {btnNamer} </button>
              <li className="px-4 font-bold ">{loggedInUser}</li>
            </ul>
          </div>
      </div>
    )
  };

  export default Header;