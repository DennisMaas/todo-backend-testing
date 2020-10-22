//description and status are in the document
import React from "react";
import {render} from "@testing-library/react";
import  Todo  from "./Todo"
import userEvent from "@testing-library/user-event";


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

    it('shows advance button NOT for DONE todos',  () => {
        //GIVEN
        const todo ={
            description: "do this",
            status: "DONE"
        }

        const {queryByLabelText} = render(<Todo {...todo} />);
        //WHEN

        const actual = queryByLabelText(/advance/i);

        //THEN
        expect(actual).not.toBeInTheDocument()

    });
    it('no buttons are shown when showButtons is false',  () => {
        //GIVEN
        const todo ={
            description: "do this",
            status: "DONE",
            showButtons: false
        }

        const {queryByRole} = render(<Todo {...todo} />);
        //WHEN

        const actual = queryByRole("button");

        //THEN
        expect(actual).not.toBeInTheDocument()

    });


    //onAdvance is called with the todo’s data on click of advance button
    it('onAdvance is called with the todo’s data on click of advance button',  () => {
        //GIVEN
        const handler = jest.fn()
        const todo ={
            description: "do this",
            status: "OPEN",
        }
        const {getByLabelText} = render(<Todo onAdvance={handler} {...todo} />);
        //WHEN
        const button = getByLabelText("advance")
        userEvent.click(button);

        //THEN
        expect(handler).toHaveBeenCalledWith(todo)

    });

})


