import React from "react";
import { render, screen } from "@testing-library/react";
import Contact from "../../components/Contact";
import { IFOOD_LINK, FORMATTED_PHONE, WHATSAPP_LINK } from "../../consts/contact.consts";

// Mock dos ícones para evitar erros nos testes
jest.mock("react-icons/fa", () => ({
    FaWhatsapp: () => <span data-testid="icon-whatsapp" />,
    FaClock: () => <span data-testid="icon-clock" />,
}));
jest.mock("react-icons/fa6", () => ({
    FaLocationDot: () => <span data-testid="icon-location-dot" />,
}));
jest.mock("react-icons/si", () => ({
    SiIfood: () => <span data-testid="icon-ifood" />,
}));

describe("Contact Component", () => {
    test("renders the section title", () => {
        render(<Contact />);
        expect(screen.getByRole("heading", { name: /nossos contatos/i })).toBeInTheDocument();
    });

    test("renders the WhatsApp link with correct href and content", () => {
        render(<Contact />);
        const whatsappLink = screen.getByRole("link", { name: /clique aqui e faça seu pedido/i });
        expect(whatsappLink).toBeInTheDocument();
        expect(whatsappLink).toHaveAttribute("href", WHATSAPP_LINK);
        expect(screen.getByText(FORMATTED_PHONE)).toBeInTheDocument();
    });

    test("renders the iFood link with correct href and content", () => {
        render(<Contact />);
        const ifoodLink = screen.getByRole("link", { name: /ou peça pelo ifood/i });
        expect(ifoodLink).toBeInTheDocument();
        expect(ifoodLink).toHaveAttribute("href", IFOOD_LINK);
    });

    test("renders the location description", () => {
        render(<Contact />);
        const locationDescription = screen.getByText(
            /rua alfredo lopes 1717 - cep 13560460/i
        );
        expect(locationDescription).toBeInTheDocument();
        expect(screen.getByTestId("icon-location-dot")).toBeInTheDocument();
    });

    test("renders the working hours description", () => {
        render(<Contact />);
        const hoursDescription = screen.getByText(
            /funcionamos de segunda a sábado, das 11:00 às 15:00/i
        );
        expect(hoursDescription).toBeInTheDocument();
        expect(screen.getByTestId("icon-clock")).toBeInTheDocument();
    });

    test("renders all buttons with correct classes", () => {
        render(<Contact />);
        const buttons = screen.getAllByRole("link");
        expect(buttons).toHaveLength(2);

        expect(buttons[0]).toHaveClass("button", "primary", "contact-button");
        expect(buttons[1]).toHaveClass("button", "secondary", "contact-button", "secondary");
    });
});
