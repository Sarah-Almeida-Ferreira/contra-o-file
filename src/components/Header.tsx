import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/components/Header.css";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [scrollOffset, setScrollOffset] = React.useState(-80);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    React.useEffect(() => {
        const handleResize = () => {
            const clientWidth = window.innerWidth;

            if (clientWidth && clientWidth < 781) {
                setScrollOffset(-200);
            }
        };

        // Chama o handleResize ao montar e sempre que a largura da tela mudar
        handleResize(); // Para chamar na primeira renderização

        // Adiciona um event listener para a mudança de tamanho da tela
        window.addEventListener("resize", handleResize);

        // Cleanup: remove o listener quando o componente for desmontado
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header className={["header", isMenuOpen ? "active" : ""].join(" ")} aria-label="Header">
            <StaticImage alt="Imagem de comida vegana" src="../images/logo-contra-file.png" height={80} />
            <nav>
                <button type="button" className="nav-button" onClick={toggleMenu} aria-label="Abrir menu de navegação">
                    <GiHamburgerMenu />
                </button>
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="hero" smooth={true} duration={500} offset={scrollOffset} onClick={toggleMenu}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="about" smooth={true} duration={500} offset={scrollOffset} onClick={toggleMenu}>Sobre</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="menu" smooth={true} duration={500} offset={scrollOffset} onClick={toggleMenu}>Cardápio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="contact" smooth={true} duration={500} offset={scrollOffset} onClick={toggleMenu}>Contatos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;