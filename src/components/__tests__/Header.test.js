import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


it("should render Header component with my login button",() =>{
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
    </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name:"Login"});//if muliple byns on screen and I want specificly that btn
    //const loginButton = screen.getByText("Login");
    expect(loginButton).toBeInTheDocument();
});

it("should render Header component with a Cart item 0",() =>{
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
    </BrowserRouter>
    );

    const cartItems = screen.getByText("Cart-(0)");
    expect(cartItems).toBeInTheDocument();
});

it("should render Header component with a Cart item",() =>{
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
    </BrowserRouter>
    );

    const cartItems = screen.getByText(/Cart/);//regex
    expect(cartItems).toBeInTheDocument();
});

it("should change Login button to Logout on click",() =>{
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
    </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", {name:"Login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name:"Logout"});

    expect(logoutButton).toBeInTheDocument();
});