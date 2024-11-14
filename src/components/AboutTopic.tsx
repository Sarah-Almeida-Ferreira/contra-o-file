import * as React from "react";
import "../styles/components/AboutTopic.css";

type AboutTopicProps = {
    title: string;
    text: string;
    icon: React.ReactNode;
}

const AboutTopic: React.FC<AboutTopicProps> = ({ title, text, icon }) => {
    return (
        <li className="about-item">
            <div className="about-item-icon">{icon}</div>
            <span className="about-item-content">
                <h4 className="about-item-title">{title}</h4>
                <p>{text}</p>
            </span>
        </li>
    );
};

export default AboutTopic;