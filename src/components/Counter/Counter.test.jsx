import React from "react";
import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest"; // for extended matchers like toBeInTheDocument
import userEvent from "@testing-library/user-event";    // for simulating user interactions

describe("Counter", () => {
    it("increments counter on button click", async () => {
        render(<Counter />);
        const button = screen.getByRole("button", { name: /increment/i });
        const counterValue = screen.getByTestId("counter-value");
        expect(counterValue.textContent).toEqual("0");
        await userEvent.click(button);
        expect(counterValue.textContent).toEqual("1");
    });
});
