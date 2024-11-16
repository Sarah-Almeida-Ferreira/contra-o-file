import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/components/Hero.css";
import { WHATSAPP_LINK } from "../consts/contact.consts";

const Hero: React.FC = () => {
    return (
        <section aria-label="Hero Section" className="hero" id="hero">
            <StaticImage className="hero-image" alt="Hero" src="../assets/hero-image.jpg" loading="lazy" />
            <div className="hero-slogan">
                <div className="hero-slogan-container">
                    Saúde vegana ao seu alcance, com sabor e consciência local.
                    <a href={WHATSAPP_LINK} className="button primary hero-slogan-button">
                        Faça seu pedido!
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;