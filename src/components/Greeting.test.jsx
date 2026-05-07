import React from "react";
import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest"; // for extended matchers like toBeInTheDocument

describe("Greeting", () => {
    it("renders with a name", () => {       //Test with the name prop provided
        render(<Greeting name="Alice" />);
        expect(screen.getByText("Hello, Alice!")).toBeInTheDocument();
    });

    it("renders with default name when no name is provided", () => {        //Test without the name prop to check default behavior
        render(<Greeting />);
        expect(screen.getByText("Hello, World!")).toBeInTheDocument();
    });
});