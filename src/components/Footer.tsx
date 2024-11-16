import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/components/Footer.css";
import { Link } from "react-scroll";
import { WHATSAPP_LINK, IFOOD_LINK } from "../consts/contact.consts";
import { FaWhatsapp } from "react-icons/fa";
import { SiIfood } from "react-icons/si";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <Link to="hero" aria-label="Voltar para topo da página">
                <StaticImage alt="Logo" src="../assets/logo-contra-file.png" height={80} />
            </Link>
            <div className="footer-links-container" data-testid="footer-links-container">
                <a href={WHATSAPP_LINK} className="link"><FaWhatsapp aria-label="WhatsApp" /></a>
                <a href={IFOOD_LINK} className="link"><SiIfood aria-label="iFood" /></a>
            </div>
        </footer>
    );
};

export default Footer;