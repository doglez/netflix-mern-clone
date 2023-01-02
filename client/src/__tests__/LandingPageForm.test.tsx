import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import LandingPageForm from "../pages/auth/auth-components/LandingPageForm";

describe("<LandingPageForm /> test", () => {
    const setup = () => {
        render(
            <MemoryRouter>
                <LandingPageForm />
            </MemoryRouter>
        );
    };

    beforeEach(() => {
        setup();
    });

    it("Should have a <form> with <input> email", () => {
        expect(screen.getByTestId("form-to-signup")).toHaveFormValues({
            email: "",
        });
    });

    it("Should have a <form> with <label> 'Email address'", () => {
        expect(
            screen.getByRole("textbox", { name: "Email address" })
        ).toBeInTheDocument();
    });

    it("Should have a <form> with <button>", () => {
        expect(
            screen.getByRole("button", { name: "Get Started" })
        ).toBeInTheDocument();
    });

    it("Should show a message 'Email is required!' if <input> email is empty", async () => {
        const emailInput = screen.getByRole("textbox", {
            name: "Email address",
        });

        const submitButton = screen.getByRole("button", {
            name: "Get Started",
        });

        fireEvent.change(emailInput, { target: { value: "" } });

        fireEvent.click(submitButton);

        const errorMessage = await screen.findByText(/Email is required!/i);

        expect(errorMessage).toHaveTextContent(/Email is required!/i);
    });

    it("Should show a message 'Please enter a valid email address' if <input> email is not a email format", async () => {
        const emailInput = screen.getByRole("textbox", {
            name: "Email address",
        });

        const submitButton = screen.getByRole("button", {
            name: "Get Started",
        });

        fireEvent.change(emailInput, { target: { value: "abc" } });

        fireEvent.click(submitButton);

        const errorMessage = await screen.findByText(
            /Please enter a valid email address/i
        );

        expect(errorMessage).toHaveTextContent(
            /Please enter a valid email address/i
        );
    });
});
