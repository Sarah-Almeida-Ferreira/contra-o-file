import * as React from "react";
import { render, screen } from "@testing-library/react";
import IndexPage, { Head } from "../../pages/index";
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


describe("IndexPage", () => {
    it("renders the Header component", () => {
        render(<IndexPage {...mockPageProps} />);
        expect(screen.getByRole("banner", { name: "Header" })).toBeInTheDocument();
    });

    it("renders the Hero component", () => {
        render(<IndexPage {...mockPageProps} />);
        expect(screen.getByRole("region", { name: "Hero Section" })).toBeInTheDocument();
    });

    it("renders the About component", () => {
        render(<IndexPage {...mockPageProps} />);
        expect(screen.getByRole("region", { name: "About Section" })).toBeInTheDocument();
    });

    it("renders the Menu component", () => {
        render(<IndexPage {...mockPageProps} />);
        expect(screen.getByRole("region", { name: "Menu Section" })).toBeInTheDocument();
    });

    it("renders the Contact component", () => {
        render(<IndexPage {...mockPageProps} />);
        expect(screen.getByRole("region", { name: "Contact Section" })).toBeInTheDocument();
    });

    it("renders the Footer component", () => {
        render(<IndexPage {...mockPageProps} />);
        expect(screen.getByRole("contentinfo", { name: "Footer" })).toBeInTheDocument();
    });

    it("sets the correct page title in the head", () => {
        render(<Head {...mockPageProps} />);
        const title = document.querySelector("title");
        expect(title).toHaveTextContent("Contra o Filé");
    });
});
