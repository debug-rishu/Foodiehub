import React from "react";
import {createRoot} from 'react-dom/client';
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router";
import About from "./components/About";
import ContactUs from "./components/Contact";
import RestroMenu from "./components/Menu";
import Error from "./components/Error";
import { Provider } from "react-redux";
import { lazy,Suspense  } from "react";
import appStore from "./utils/appStore";
import CartVZ from "./components/Cart";


 //bundling
 const Grocery=lazy(()=> import ("./components/Grocery"));

const Applayout= ()=> {
  return(
   
    <Provider store={appStore}>
     
    <div className="app">
      <Header/>
      <Outlet/>
    </div>
    </Provider>
  )
  
};
//config
    const approuter=createBrowserRouter([
      {
        path: "/",
        element: <Applayout/>,
        children:[

          {
            path: "/",
            element: <Body/>,
          },

          {
            path: "/about",
            element:<About/>
      },
      
          {
            path:"/contact",
            element:<ContactUs/>
          },

          {
            path:"/grocery",
            element:<Suspense fallback={<h1>Hey buddy</h1>}><Grocery/></Suspense>
          },

          {
            path:"/restro/:resId",
            element:<RestroMenu/>
          },

          {
            path:"/cart",
            element:<CartVZ/>
          }
        ],
        errorElement:<Error/>,
      },

    ])

const root = createRoot(document.getElementById('root'));
//routing
root.render(<RouterProvider router={approuter}/>);
