import { render, screen } from "@testing-library/react";
import RestaurantCard ,{withDiscountOffer}from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

it("should render RestaurantCard component with props data", () => {
    render(
        <BrowserRouter>
            <RestaurantCard {...MOCK_DATA} />
        </BrowserRouter>
    );

    const name = screen.getByText("McDonald's");
    expect(name).toBeInTheDocument();
});

it("should render RestaurantCard component with Discount Offer", () => {
    //Testing Higher Order component
    const RestaurantOffer = withDiscountOffer(RestaurantCard)
    render(
        <BrowserRouter>
            <RestaurantOffer {...MOCK_DATA} />
        </BrowserRouter>
    );

    const discountOffer = screen.getByText("ITEMS AT ₹179");
    expect(discountOffer).toBeInTheDocument();
});
