// import RestaurantCard from "../RestaurantCard";
// import { render, screen } from "@testing-library/react";
// import Mock_Data from "../mocks/resCardMock.json";

// import "@testing-library/jest-dom";  

// it("should render rescard component with props data", () => {
 
 
  
//   render(<RestaurantCard resData={Mock_Data} />);

  
//   const name = screen.getByText("Olio - The Wood Fired Pizzeria");
//   expect(name).toBeInTheDocument();  
// });

import { sum } from "../sum"


test("sum should calculatr the sum of two nos",()=>{


     const res =sum(9,4);
     //assertion
    expect(res).toBe(13);
})