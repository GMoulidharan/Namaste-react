import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

describe("Contact page test cases",() =>{
    // beforeAll(() =>{
    //     console.log("Before All");
    // });

    // beforeEach(() =>{
    //     console.log("Before Each");
    // });

    // afterAll(() =>{
    //     console.log("After All");
    // });

    // afterEach(() =>{
    //     console.log("After Each");
    // });

    it('should load Contact component', () => { 
        render(<Contact />);
    
        const heading = screen.getByRole("heading");
        //Assertion
        expect(heading).toBeInTheDocument();
    });
    
    it('should load button inside Contact component', () => { 
        render(<Contact />);
    
        const button = screen.getByRole("button");
        //Assertion
        expect(button).toBeInTheDocument();
    });
    
    it('should load input name inside Contact component', () => { 
        render(<Contact />);
    
        const inputName = screen.getByPlaceholderText("Name");
        //Assertion
        expect(inputName).toBeInTheDocument();
    });
    
    it("should load 2 input boxes on the Contact component",() =>{
        render(<Contact />);
        //Querying
        const inputBoxes = screen.getAllByRole("textbox");//for multiple items
        expect(inputBoxes.length).toBe(2);
    });
});

