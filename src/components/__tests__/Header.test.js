import { Provider } from "react-redux";
import Header from "../Header"
import { fireEvent, render,screen } from "@testing-library/react"
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
 import  "@testing-library/jest-dom";

  it("should load Header component with a login button",()=>{

    render(
    <BrowserRouter>
        <Provider store={appStore}>
          <Header/>
        </Provider>
    </BrowserRouter> 
    );

    const loginButton=screen.getByRole("button");

    expect (loginButton).toBeInTheDocument();
      
 });

 //

 it("should load Header cart items  component",()=>{

    render(
    <BrowserRouter>
        <Provider store={appStore}>
          <Header/>
        </Provider>
    </BrowserRouter> 
    );

    const cart=screen.getByText(/Cart/);

    expect (cart).toBeInTheDocument();
      
 });

 //

 it("should change login button   component",()=>{

    render(
    <BrowserRouter>
        <Provider store={appStore}>
          <Header/>
        </Provider>
    </BrowserRouter> 
    );

    const loginb=screen.getByRole("button");
 
   fireEvent.click(loginb);
  
   const logout=screen.getByRole("button",{name : "Logout"})

   expect (logout).toBeInTheDocument();
      
 });

 



 