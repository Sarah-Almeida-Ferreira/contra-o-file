import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../../components/Footer";
import { WHATSAPP_LINK, IFOOD_LINK } from "../../consts/contact.consts";

// Mock para evitar problemas com `gatsby-plugin-image`
jest.mock("gatsby-plugin-image", () => ({
    StaticImage: jest.fn(({ alt }) => <img alt={alt} />),
}));

describe("Footer Component", () => {
    test("renders the footer with the logo", () => {
        render(<Footer />);

        const logo = screen.getByAltText("Logo");
        expect(logo).toBeInTheDocument();
    });

    test("contains a link to scroll to the top of the page", () => {
        render(<Footer />);

        const topLink = screen.getByLabelText("Voltar para topo da página");
        expect(topLink).toBeInTheDocument();
        expect(topLink.tagName).toBe("A");
    });

    test("renders WhatsApp icon with correct link", () => {
        render(<Footer />);

        const whatsappLink = screen.getByLabelText("WhatsApp");
        expect(whatsappLink).toBeInTheDocument();
        expect(whatsappLink.closest("a")).toHaveAttribute("href", WHATSAPP_LINK);
    });

    test("renders iFood icon with correct link", () => {
        render(<Footer />);

        const ifoodLink = screen.getByLabelText("iFood");
        expect(ifoodLink).toBeInTheDocument();
        expect(ifoodLink.closest("a")).toHaveAttribute("href", IFOOD_LINK);
    });

    test("applies correct CSS classes", () => {
        render(<Footer />);

        const footerElement = screen.getByRole("contentinfo");
        expect(footerElement).toHaveClass("footer");

        const linksContainer = screen.getByTestId("footer-links-container");
        expect(linksContainer).toBeInTheDocument();
        expect(linksContainer).toHaveClass("footer-links-container");
    });
});
