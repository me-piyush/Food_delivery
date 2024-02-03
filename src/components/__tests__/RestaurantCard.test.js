import { render , screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom";

it("should render Restaurant card componenet with props Data", ()=>{
    render(<RestaurantCard resData={MOCK_DATA}/>);

    const name = screen.getByText("Leon's - Burgers & Wings (Leon Grill)");
    expect(name).toBeInTheDocument();
});