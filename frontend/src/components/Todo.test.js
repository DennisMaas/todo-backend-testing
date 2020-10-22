//description and status are in the document
import React from "react";
import {render} from "@testing-library/react";
import  Todo  from "./Todo"


describe("unit test :: Todo Component", () => {
    it("show description in todo-card", ()  => {
    //GIVEN
        const todo ={
            description: "do this",
            status: "OPEN"
        }
        const {getByText} = render(<Todo {...todo} />);

    //WHEN
        const actual= getByText(/do this/i);

    //THEN
        expect(actual).toBeInTheDocument()
    });

    it("show status in todo-card", ()  => {
        //GIVEN
        const todo ={
            description: "do this",
            status: "OPEN"
        }
        const {getByText} = render(<Todo {...todo} />);

        //WHEN
        const actual= getByText(/open/i);

        //THEN
        expect(actual).toBeInTheDocument()
    });



})