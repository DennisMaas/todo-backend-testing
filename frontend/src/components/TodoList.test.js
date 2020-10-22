import React from "react";
import {render} from "@testing-library/react";
import Todo from "./Todo"
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import {Switch, Route, Router} from "react-router-dom";
import TodoList from "./TodoList";

describe("component test :: TodoList", () => {
    it("should only display todos with an OPEN status", () => {
        // Given
        const todos = [
            { id: "istegal", status: "OPEN", description: "istegal" },
            { id: "istauchegal", status: "IN_PROGRESS", description: "istauchegal" },
            { id: "istmegafuckegal", status: "DONE", description: "istmegafuckegal" }
        ];

        const history = createMemoryHistory();
        history.push("/board/open");

        const {queryByText} = render(
            <Router history={history}>
                <Switch>
                    <Route path="/board/:status">
                        <TodoList todos={todos}/>
                    </Route>
                </Switch>
            </Router>
        );

        // When
        const todoWithOpenStatus = queryByText(/open/i);
        const todoWithDoneStatus = queryByText(/done/i);
        const todoWithInProgressStatus = queryByText(/in_progress/i);

        // Then
        expect(todoWithOpenStatus).toBeInTheDocument();
        expect(todoWithInProgressStatus).not.toBeInTheDocument();
        expect(todoWithDoneStatus).not.toBeInTheDocument();
    });
});