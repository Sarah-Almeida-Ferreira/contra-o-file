import { render, screen } from "@testing-library/react";
import AboutTopic from "../../components/AboutTopic";
import React from "react";

const mockIcon = <span>Icon</span>;

describe("AboutTopic Component", () => {
    it("should render the title, text, and icon", () => {
        const title = "Vegan Health";
        const text = "Information about vegan health benefits";

        render(<AboutTopic title={title} text={text} icon={mockIcon} />);

        const titleElement = screen.getByText(title);
        expect(titleElement).toBeInTheDocument();

        const textElement = screen.getByText(text);
        expect(textElement).toBeInTheDocument();

        const iconElement = screen.getByText("Icon");
        expect(iconElement).toBeInTheDocument();
    });

    it("should have the correct classes applied", () => {
        const title = "Vegan Health";
        const text = "Information about vegan health benefits";

        render(<AboutTopic title={title} text={text} icon={mockIcon} />);

        const listItem = screen.getByRole("listitem");
        expect(listItem).toHaveClass("about-item");

        const titleElement = screen.getByText(title);
        expect(titleElement).toHaveClass("about-item-title");

        const contentElement = screen.getByText(text);
        expect(contentElement.closest("span")).toHaveClass("about-item-content");
    });

    it("should render correctly when no icon is passed", () => {
        const title = "Vegan Health";
        const text = "Information about vegan health benefits";

        render(<AboutTopic title={title} text={text} icon={null} />);

        const titleElement = screen.getByText(title);
        const textElement = screen.getByText(text);
        expect(titleElement).toBeInTheDocument();
        expect(textElement).toBeInTheDocument();

        const iconElement = screen.queryByText("Icon");
        expect(iconElement).not.toBeInTheDocument();
    });
});
