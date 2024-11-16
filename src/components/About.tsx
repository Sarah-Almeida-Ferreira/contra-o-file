import * as React from "react";
import Section from "../templates/Section";
import { ABOUT } from "../consts/about.const";
import AboutTopic from "./AboutTopic";
import "../styles/components/About.css";
import { StaticImage } from "gatsby-plugin-image";

const About: React.FC = () => {
    return (
        <Section title={ABOUT.title} aria-label="About Section" id="about">
            <div className="container about-container">
                <ul aria-label="about-topics">
                    {ABOUT.items.map((item, index) => (
                        <AboutTopic key={index} title={item.title} text={item.text} icon={item.icon} />
                    ))}
                </ul>
                <div className="about-image">
                    <StaticImage alt="Imagem de comida vegana" src="../images/about-image.jpg" loading="lazy" />
                </div>
            </div>
        </Section>
    );
};

export default About;