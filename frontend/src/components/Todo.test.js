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

//advance button is only shown for open or in progress todos
    it('shows advance button only for OPEN todos',  () => {
        //GIVEN
    const todo ={
            description: "do this",
            status: "OPEN"
        }

        const {getByText} = render(<Todo {...todo} />);
        //WHEN

        const actual = getByText(/advance/i);

        //THEN
        expect(actual).toBeInTheDocument()

    });

    it('shows advance button only for OPEN todos',  () => {
        //GIVEN
        const todo ={
            description: "do this",
            status: "OPEN"
        }

        const {getByLabelText} = render(<Todo {...todo} />);
        //WHEN

        const actual = getByLabelText(/advance/i);

        //THEN
        expect(actual).toBeInTheDocument()

    });


})


