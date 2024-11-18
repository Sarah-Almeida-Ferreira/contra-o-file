import React, { AnchorHTMLAttributes, ReactNode } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../../components/Header";

// Mock para evitar problemas com `gatsby-plugin-image`
jest.mock("gatsby-plugin-image", () => ({
    StaticImage: jest.fn(({ alt }) => <img alt={alt} />),
}));

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    children: ReactNode;
    smooth: boolean;
}
// mock para evitar problemas com a lib react-scroll
jest.mock("react-scroll", () => ({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Link: ({ children, smooth, ...props }: LinkProps) => {
        return <a {...props}>{children}</a>;
    },
    animateScroll: {
        scrollToTop: jest.fn(),
    },
}));

describe("Header Component", () => {
    test("renders the header with the logo", () => {
        render(<Header />);

        const logo = screen.getByAltText("Imagem de comida vegana");
        expect(logo).toBeInTheDocument();
    });

    test("renders the navigation menu", () => {
        render(<Header />);

        const navButton = screen.getByLabelText("Abrir menu de navegação");
        expect(navButton).toBeInTheDocument();

        const menuItems = screen.getAllByRole("listitem");
        expect(menuItems).toHaveLength(4);

        const links = ["Home", "Sobre", "Cardápio", "Contatos"];
        links.forEach(linkText => {
            expect(screen.getByText(linkText)).toBeInTheDocument();
        });
    });

    test("toggles the menu visibility when the button is clicked", () => {
        render(<Header />);

        const navButton = screen.getByLabelText("Abrir menu de navegação");

        const header = screen.getByRole("banner");
        expect(header).not.toHaveClass("active");

        fireEvent.click(navButton);
        expect(header).toHaveClass("active");

        fireEvent.click(navButton);
        expect(header).not.toHaveClass("active");
    });

    test("applies the correct scroll offset for links", () => {
        render(<Header />);

        const homeLink = screen.getByText("Home");
        expect(homeLink).toHaveAttribute("offset", "-80");
    });

    test("closes the menu when a navigation link is clicked", () => {
        render(<Header />);

        const navButton = screen.getByLabelText("Abrir menu de navegação");
        const homeLink = screen.getByText("Home");

        fireEvent.click(navButton);
        expect(screen.getByRole("banner")).toHaveClass("active");

        fireEvent.click(homeLink);
        expect(screen.getByRole("banner")).not.toHaveClass("active");
    });
});
