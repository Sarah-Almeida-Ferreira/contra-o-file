import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/components/Hero.css";
import { FaWhatsapp } from "react-icons/fa6";
import { getWhatsappLink } from "../utils/contact.util";

const Hero: React.FC = () => {
    return (
        <section aria-label="Hero Section" className="hero" id="hero">
            <StaticImage className="hero-image" alt="Hero" src="../images/hero-image.jpg" loading="lazy" />
            <div className="hero-slogan">
                <div className="hero-slogan-container">
                    <h1>
                        Saúde vegana ao seu alcance, com sabor e consciência local.
                    </h1>
                    <a href={getWhatsappLink()} className="button primary hero-slogan-button">
                        <FaWhatsapp aria-label="WhatsApp" />
                        Faça seu pedido!
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;