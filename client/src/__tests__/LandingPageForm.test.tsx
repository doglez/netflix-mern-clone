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
        expect(screen.getByLabelText("Email address")).toBeInTheDocument();
    });

    it("Should have a <form> with <button>", () => {
        expect(screen.getByTestId("button-to-signup")).toBeInTheDocument();
    });

    it("Should show a message 'Email is required!' if <input> email is empty", () => {
        const email = screen.getByTestId("email-to-signup") as HTMLInputElement;
        const submit = screen.getByTestId("button-to-signup");

        fireEvent.change(email, { target: { value: "" } });
        expect(submit).toBeInTheDocument();
    });
});
