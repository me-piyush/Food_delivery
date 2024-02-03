import { render , screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";
it("should load contact us component " ,()=>{
    render(<Contact/>);
    const heading =screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});
it("should load button component " ,()=>{
    render(<Contact/>);
    const button =screen.getByRole("button");
    expect(button).toBeInTheDocument();
});
it("should load input name inside component " ,()=>{
    render(<Contact/>);
    const inputName =screen.getByPlaceholderText("Name");
    expect(inputName).toBeInTheDocument();
});
it("should load 2 input boxes inside component " ,()=>{
    render(<Contact/>);
    const inputCount =screen.getAllByRole("textbox");
    expect(inputCount.length).toBe(2);
});