import * as React from "react";
import Section from "../templates/Section";
import { MENU } from "../consts/menu.const";
import MenuItem from "./MenuItem";
import "../styles/components/Menu.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Menu: React.FC = () => {
    const carouselRef = React.useRef<HTMLUListElement | null>(null);
    const startXRef = React.useRef(0);

    const handleScroll = (direction: "left" | "right") => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        const gap = 10;
        const itemWidth = carousel.offsetWidth * 0.3;
        const scrollOffset = itemWidth + gap;
        const left = direction === "left" ? -scrollOffset : scrollOffset;

        carousel.scrollBy({
            left,
            behavior: "smooth",
        });
    };

    const handleTouchStart = (event: React.TouchEvent<HTMLUListElement>) => {
        startXRef.current = event.touches[0].clientX; // Armazena a posição inicial do toque
    };

    const handleTouchEnd = (event: React.TouchEvent<HTMLUListElement>) => {
        const endX = event.changedTouches[0].clientX; // Posição final do toque
        const diffX = endX - startXRef.current; // Diferença entre posição inicial e final

        if (diffX === 0) return;

        const direction = diffX > 0 ? "left" : "right";
        handleScroll(direction);
    };

    const scrollLeft = () => handleScroll("left");
    const scrollRight = () => handleScroll("right");

    return (
        <Section title="Nosso cardápio" aria-label="Menu Section">
            <div className="menu-container">
                <button className="menu-carousel-button left" type="button" onClick={scrollLeft} data-testid="left-button">
                    <FaChevronLeft />
                </button>
                <button className="menu-carousel-button right" type="button" onClick={scrollRight} data-testid="right-button">
                    <FaChevronRight />
                </button>
                <ul className="menu-items" data-testid="menu-items" ref={carouselRef} onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart}>
                    {MENU.map((item, index) => (
                        <MenuItem
                            key={index}
                            title={item.title}
                            image={item.image}
                            description={item.description}
                            prices={item.prices}
                        />
                    ))}
                </ul>
            </div>
        </Section>
    );
};

export default Menu;
