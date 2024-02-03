import { sum } from "../sum";

test("Sum funcn should calculate the sum of two numbers ", ()=>{

    const result = sum(3,4);
    //Asssertion :
    expect(result).toBe(7);
});