import  "@testing-library/jest-dom"
import { fireEvent, render,screen } from "@testing-library/react";
import Body from "../Body";
import MOck_Data from "../mocks/MockrestrooData.json"
import { act } from "react";
import { BrowserRouter } from "react-router-dom";


global.fetch=jest.fn(()=>{
    return Promise.resolve(
        {
            json:()=>{
                return Promise.resolve(MOck_Data);
            }
        });
});


 it("should render the Body Component with Search",async()=>{


    await act ( async()=>render(<BrowserRouter>< Body/></BrowserRouter>))

    const cardsBefore=screen.getAllByTestId("rescard")
    expect(cardsBefore.length).toBe(20);

    const searchBtn=screen.getByRole("button",{name:"Search"})
     
    const searce=screen.getByTestId("searchee")

    fireEvent.change(searce,{target:{value:"cafe"}})
    fireEvent.click(searchBtn)


     
  const cards =  screen.getAllByTestId("rescard");

  
  expect(cards.length).toBeGreaterThan(0); 


    expect(searchBtn).toBeInTheDocument()
 });