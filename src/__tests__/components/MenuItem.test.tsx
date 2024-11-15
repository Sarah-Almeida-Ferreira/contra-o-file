import React from "react";
import { render, screen } from "@testing-library/react";
import MenuItem from "../../components/MenuItem";
import "@testing-library/jest-dom";

describe("MenuItem component", () => {
    const mockImage = <img src="mock-image.jpg" alt="Mock item" />;
    const mockPrices = [
        { label: "Pequeno", price: 10.99 },
        { label: "Grande", price: 20.99 },
    ];

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should render the title, description, and image", () => {
        render(
            <MenuItem
                title="Mock Item"
                description="This is a mock description."
                image={mockImage}
                prices={mockPrices}
            />
        );

        const titleElement = screen.getByText("Mock Item");
        expect(titleElement).toBeInTheDocument();
        expect(titleElement).toHaveClass("menu-item-title");

        const descriptionElement = screen.getByText("This is a mock description.");
        expect(descriptionElement).toBeInTheDocument();

        const imageElement = screen.getByAltText("Mock item");
        expect(imageElement).toBeInTheDocument();
        expect(imageElement).toHaveAttribute("src", "mock-image.jpg");
    });

    it("should render the list of prices using PriceTag component", () => {
        render(
            <MenuItem
                title="Mock Item"
                description="This is a mock description."
                image={mockImage}
                prices={mockPrices}
            />
        );

        const priceTags = screen.getAllByTestId("price-tag");
        expect(priceTags.length).toBe(mockPrices.length);

        mockPrices.forEach((price) => {
            const labelElement = screen.getByText(price.label);
            const priceElement = screen.getByText(new RegExp(price.price.toFixed(2).replace(".", ",")));

            expect(labelElement).toBeInTheDocument();
            expect(priceElement).toBeInTheDocument();
        });
    });

    it("should render the correct structure and class names", () => {
        render(
            <MenuItem
                title="Mock Item"
                description="This is a mock description."
                image={mockImage}
                prices={mockPrices}
            />
        );

        const listItem = screen.getByTestId("menu-item");
        expect(listItem).toHaveClass("menu-item");

        const imageContainer = screen.getByAltText("Mock item").parentElement;
        expect(imageContainer).toHaveClass("menu-item-image");

        const contentContainer = screen.getByText("Mock Item").parentElement;
        expect(contentContainer).toHaveClass("menu-item-content");

        const pricesContainer = screen.getByRole("list", { name: "" });
        expect(pricesContainer).toHaveClass("menu-item-prices");
    });

    it("should handle empty prices array", () => {
        render(
            <MenuItem
                title="Mock Item"
                description="This is a mock description."
                image={mockImage}
                prices={[]}
            />
        );

        const pricesContainer = screen.getByRole("list", { name: "" });
        expect(pricesContainer).toBeInTheDocument();
        expect(pricesContainer).toBeEmptyDOMElement();
    });
});
