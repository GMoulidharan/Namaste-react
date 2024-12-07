import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react"
import Header from "../Header";
import RestaurantMenu from "../RestaurantMenu";
import Cart from "../Cart"
import MOCK_MENU_DATA from "../mocks/resMenuMock.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>{
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_MENU_DATA);
        }
    });
})

it("Should load Restaurant Menu component", async() =>{
    await act(async() =>
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                    <RestaurantMenu />
                    <Cart />
                </Provider>
            </BrowserRouter>
        )
    );
    
    const accordionHeader = screen.getByText("Recommended (12)");
    fireEvent.click(accordionHeader);//click on accordion

    expect(screen.getAllByTestId("foodItems").length).toBe(12);

    const addBtns = screen.getAllByRole("button", {name:"ADD"});

    expect(screen.getByText("Cart-(0)")).toBeInTheDocument();

    fireEvent.click(addBtns[0]);//click on the first button

    expect(screen.getByText("Cart-(1)")).toBeInTheDocument();

    fireEvent.click(addBtns[1]);
    expect(screen.getByText("Cart-(2)")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(14);//12+2=14. 2 from the cart
    
    const clearBtn = screen.getByRole("button", {name:"Clear Cart"})
    fireEvent.click(clearBtn);
    
    expect(screen.getAllByTestId("foodItems").length).toBe(12)//after clear cart less 2

     
    expect(screen.getByText("Cart is empty. Add Items to the cart")).toBeInTheDocument();
})