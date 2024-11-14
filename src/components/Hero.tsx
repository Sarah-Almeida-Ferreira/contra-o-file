import * as React from "react";
import HeroImage from "../assets/hero-image.jpg";
import "../styles/components/Hero.css";
import { WHATSAPP_LINK } from "../consts/contact.consts";

const Hero: React.FC = () => {
    return (
        <section aria-label="Hero Section" className="hero">
            <img className="hero-image" alt="Hero" src={HeroImage} />
            <div className="hero-slogan">
                <div className="hero-slogan-container">
                    Saúde vegana ao seu alcance, com sabor e consciência local.
                    <a href={WHATSAPP_LINK} className="primary-button hero-slogan-button">
                        Faça seu pedido!
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;