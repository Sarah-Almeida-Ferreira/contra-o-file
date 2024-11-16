import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/components/Header.css";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const header = React.useRef<HTMLHeadingElement>(null);
    const scrollOffset = React.useRef(-80);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    React.useEffect(() => {
        const clientWidth = header.current?.clientWidth;
        if (clientWidth && clientWidth < 781) scrollOffset.current = -200;
    }, [header.current]);

    return (
        <header className={["header", isMenuOpen ? "active" : ""].join(" ")} ref={header}>
            <StaticImage alt="Imagem de comida vegana" src="../images/logo-contra-file.png" height={80} />
            <nav>
                <button type="button" className="nav-button" onClick={toggleMenu} aria-label="Abrir menu de navegação">
                    <GiHamburgerMenu />
                </button>
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="hero" smooth={true} duration={500} offset={scrollOffset.current} onClick={toggleMenu}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="about" smooth={true} duration={500} offset={scrollOffset.current} onClick={toggleMenu}>Sobre</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="menu" smooth={true} duration={500} offset={scrollOffset.current} onClick={toggleMenu}>Cardápio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="contact" smooth={true} duration={500} offset={scrollOffset.current} onClick={toggleMenu}>Contatos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;