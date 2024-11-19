import { render, screen } from "@testing-library/react";
import Hero from "../../components/Hero";
import { getWhatsappLink } from "../../utils/contact.util";
import React from "react";

jest.mock("../images/hero-image.jpg", () => "../images/hero-image.jpg");

describe("Hero component", () => {
    it("renders the hero image", () => {
        render(<Hero />);

        const heroImage = screen.getByAltText("Hero");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", expect.stringContaining("hero-image.jpg"));
    });

    it("renders the hero slogan", () => {
        render(<Hero />);

        const slogan = screen.getByText(/Saúde vegana ao seu alcance/);
        expect(slogan).toBeInTheDocument();
    });

    it("renders the WhatsApp link correctly", () => {
        render(<Hero />);

        const whatsappLink = screen.getByRole("link", { name: /Faça seu pedido!/ });
        expect(whatsappLink).toBeInTheDocument();
        expect(whatsappLink).toHaveAttribute("href", getWhatsappLink());
    });

    it("has the correct class names", () => {
        render(<Hero />);

        const heroSection = screen.getByRole("region");
        expect(heroSection).toHaveClass("hero");

        const heroButton = screen.getByRole("link", { name: /Faça seu pedido!/ });
        expect(heroButton).toHaveClass("button");
        expect(heroButton).toHaveClass("primary");
        expect(heroButton).toHaveClass("hero-slogan-button");
    });
});
