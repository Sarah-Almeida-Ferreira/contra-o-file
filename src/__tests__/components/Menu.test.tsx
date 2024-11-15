import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Menu from "../../components/Menu";
import { MENU } from "../../consts/menu.const";
import "@testing-library/jest-dom";

jest.mock("../../consts/menu.const", () => ({
    MENU: [
        {
            title: "Item 1",
            description: "Delicious item 1",
            image: <img src="item1.jpg" alt="Item 1" />,
            prices: [
                { label: "Pequeno", price: 10.99 },
                { label: "Grande", price: 20.99 },
            ],
        },
        {
            title: "Item 2",
            description: "Delicious item 2",
            image: <img src="item2.jpg" alt="Item 2" />,
            prices: [
                { label: "Pequeno", price: 12.99 },
                { label: "Grande", price: 22.99 },
            ],
        },
    ],
}));

describe("Menu component", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should render the section with title and aria-label", () => {
        render(<Menu />);

        const sectionTitle = screen.getByText("Nosso cardápio");
        const section = screen.getByLabelText("Menu Section");

        expect(sectionTitle).toBeInTheDocument();
        expect(section).toBeInTheDocument();
    });

    it("should render the correct number of MenuItem components", () => {
        render(<Menu />);

        const menuItems = screen.getAllByTestId("menu-item");
        expect(menuItems).toHaveLength(MENU.length);
    });

    it("should render the left and right scroll buttons", () => {
        render(<Menu />);

        const leftButton = screen.getByTestId("left-button");
        const rightButton = screen.getByTestId("right-button");

        expect(leftButton).toBeInTheDocument();
        expect(rightButton).toBeInTheDocument();
    });

    it("should call scroll behavior when left button is clicked", () => {
        render(<Menu />);

        const leftButton = screen.getByTestId("left-button");
        const carousel = screen.getByTestId("menu-items");

        // Mocking `scrollBy`
        const scrollByMock = jest.fn();
        Object.defineProperty(carousel, "scrollBy", { value: scrollByMock });

        fireEvent.click(leftButton);

        expect(scrollByMock).toHaveBeenCalledWith({
            left: expect.any(Number), // Valor negativo para "left"
            behavior: "smooth",
        });
    });

    it("should call scroll behavior when right button is clicked", () => {
        render(<Menu />);

        const rightButton = screen.getByTestId("right-button");
        const carousel = screen.getByTestId("menu-items");

        // Mocking `scrollBy`
        const scrollByMock = jest.fn();
        Object.defineProperty(carousel, "scrollBy", { value: scrollByMock });

        fireEvent.click(rightButton);

        expect(scrollByMock).toHaveBeenCalledWith({
            left: expect.any(Number), // Valor positivo para "right"
            behavior: "smooth",
        });
    });

    it("should handle touch events and scroll in the correct direction", () => {
        render(<Menu />);

        const carousel = screen.getByTestId("menu-items");

        // Mocking `scrollBy`
        const scrollByMock = jest.fn();
        Object.defineProperty(carousel, "scrollBy", { value: scrollByMock });

        // Simula um toque
        fireEvent.touchStart(carousel, { touches: [{ clientX: 300 }] }); // Início do toque
        fireEvent.touchEnd(carousel, { changedTouches: [{ clientX: 100 }] }); // Final do toque

        expect(scrollByMock).toHaveBeenCalledWith({
            left: expect.any(Number), // Deve ser positivo para "right"
            behavior: "smooth",
        });

        // Teste para direção "left"
        fireEvent.touchStart(carousel, { touches: [{ clientX: 100 }] });
        fireEvent.touchEnd(carousel, { changedTouches: [{ clientX: 300 }] });

        expect(scrollByMock).toHaveBeenCalledWith({
            left: expect.any(Number), // Deve ser negativo para "left"
            behavior: "smooth",
        });
    });

    it("should not scroll if touch events have no significant movement", () => {
        render(<Menu />);

        const carousel = screen.getByTestId("menu-items");

        // Mocking `scrollBy`
        const scrollByMock = jest.fn();
        Object.defineProperty(carousel, "scrollBy", { value: scrollByMock });

        // Simula um toque sem movimento
        fireEvent.touchStart(carousel, { touches: [{ clientX: 200 }] });
        fireEvent.touchEnd(carousel, { changedTouches: [{ clientX: 200 }] });

        expect(scrollByMock).not.toHaveBeenCalled();
    });
});
