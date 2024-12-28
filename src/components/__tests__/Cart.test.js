import { fireEvent, render,screen } from "@testing-library/react"
import { act } from "react"
import "@testing-library/jest-dom"
import   Menu  from "../Menu"
import Mock_Data from "../mocks/Mockmenu.json"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom"
import  "@testing-library/jest-dom"
import Cart from "../Cart"

global.fetch=jest.fn(()=>{
    return Promise.resolve(
        {
            json:()=>{
                return Promise.resolve(Mock_Data);
            }
        });
});

 
  it("should render Rest Menures_URL",async()=>{
    await act(async()=>
        render(
        <BrowserRouter>
           <Provider store={appStore}>
             <Header/>
             <Menu/>
             <Cart/>
            </Provider>
        </BrowserRouter>

        ))
            
        const accordionHeader=screen.getByText("Sub Cravers (5)")
         fireEvent.click(accordionHeader)

         expect(screen.getAllByTestId("fooditems").length).toBe(5)

         expect(  screen.getByText("Cart(0)")).toBeInTheDocument()
          const addBtn=screen.getAllByRole("button",{name:"ADD +"})

           fireEvent.click(addBtn[0])
            expect(screen.getByText("Cart(1)")).toBeInTheDocument();

          fireEvent.click(screen.getByRole("button",{name:"Clear Cart"}))
           expect(screen.getAllByTestId("fooditems").length).toBe(5)

           expect(screen.getByText("Cart Is Empty")).toBeInTheDocument()
  })