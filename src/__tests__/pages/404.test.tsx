import React from "react";
import { render, screen } from "@testing-library/react";
import NotFoundPage, { Head } from "../../pages/404";
import { PageProps } from "gatsby";

const mockPageProps = {
    path: "/",
    uri: "/",
    params: {},
    children: undefined,
    pageResources: {},
    data: {},
    pageContext: {},
    serverData: {},
} as unknown as PageProps;

describe("NotFoundPage", () => {
    it("should render the page title with the 404 text and the icon", () => {
        render(
            <NotFoundPage {...mockPageProps} />
        );

        const titleElement = screen.getByTestId("not-found-title");
        expect(titleElement).toBeInTheDocument();
    });

    it("should display a message apologizing for the missing page", () => {
        render(
            <NotFoundPage {...mockPageProps} />
        );

        const messageElement = screen.getByText(
            "Desculpe, não encontramos a página que você está procurando."
        );
        expect(messageElement).toBeInTheDocument();
    });

    it("should render a link to go back to the main site", () => {
        render(
            <NotFoundPage {...mockPageProps} />
        );

        const linkElement = screen.getByRole("link", { name: "Ir para o site" });
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute("href", "/");
    });

    it("sets the correct page title in the head", () => {
        render(<Head {...mockPageProps} />);
        const title = document.querySelector("title");
        expect(title).toHaveTextContent("Contra o Filé");
    });
});
