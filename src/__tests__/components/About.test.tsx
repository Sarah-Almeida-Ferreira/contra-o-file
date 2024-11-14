import { render, screen } from "@testing-library/react";
import About from "../../components/About";
import React from "react";
import { ABOUT } from "../../consts/about.const";

jest.mock("../assets/about-image.jpg", () => "../assets/about-image.jpg");

describe("About Component", () => {
    it("should render the About section title", () => {
        render(<About />);
        const titleElement = screen.getByText(/Contra o Filé/i);
        expect(titleElement).toBeInTheDocument();
    });

    it("should render the AboutTopic components", () => {
        render(<About />);

        const topicElements = screen.getAllByRole("listitem");
        expect(topicElements).toHaveLength(ABOUT.items.length);
    });

    it("should render the image with the correct alt text", () => {
        render(<About />);

        const image = screen.getByAltText("Imagem de comida vegana");
        expect(image).toHaveAttribute("src", expect.stringContaining("about-image.jpg"));
        expect(image).toBeInTheDocument();
    });

    it("should have the correct aria-label on the topics list", () => {
        render(<About />);

        const list = screen.getByLabelText("about-topics");
        expect(list).toBeInTheDocument();
    });

    it("should render the Section component with the correct title", () => {
        render(<About />);

        const sectionTitle = screen.getByText(ABOUT.title);
        expect(sectionTitle).toBeInTheDocument();
    });
});
