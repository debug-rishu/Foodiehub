import { sum } from "../sum"


test("sum should calculatr the sum of two nos",()=>{


     const res =sum(4,4);
     //assertion
    expect(res).toBe(8);
})