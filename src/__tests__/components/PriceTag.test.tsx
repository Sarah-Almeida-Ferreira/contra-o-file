import React from "react";
import { render, screen } from "@testing-library/react";
import PriceTag from "../../components/PriceTag";
import "@testing-library/jest-dom";

describe("PriceTag component", () => {
    it("should render the label and formatted price", () => {
        render(<PriceTag label="Produto A" price={1234.56} />);

        const labelElement = screen.getByText("Produto A");
        expect(labelElement).toBeInTheDocument();

        const priceElement = screen.getByText("R$ 1.234,56");
        expect(priceElement).toBeInTheDocument();
    });

    it("should format the price correctly for different values", () => {
        render(<PriceTag label="Produto B" price={99.99} />);

        const priceElement = screen.getByText("R$ 99,99");
        expect(priceElement).toBeInTheDocument();
    });

    it("should render the correct class names", () => {
        render(<PriceTag label="Produto C" price={0} />);

        const listItemElement = screen.getByRole("listitem");
        expect(listItemElement).toHaveClass("price-tag");

        const labelElement = screen.getByText("Produto C");
        expect(labelElement).toHaveClass("price-tag-label");

        const priceElement = screen.getByText("R$ 0,00");
        expect(priceElement).toHaveClass("price-tag-price");
    });

    it("should handle very large numbers correctly", () => {
        render(<PriceTag label="Produto D" price={1000000000.99} />);

        const priceElement = screen.getByText("R$ 1.000.000.000,99");
        expect(priceElement).toBeInTheDocument();
    });
});
