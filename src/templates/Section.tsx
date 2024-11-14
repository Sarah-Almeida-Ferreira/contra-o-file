import * as React from "react";
import "../styles/templates/Section.css";

interface SectionProps extends React.HTMLAttributes<HTMLAreaElement> {
    title: string;
}

const Section: React.FC<SectionProps> = ({ title, children, ...props }) => {
    return (
        <section {...props} className="section">
            <div className="section-title-container">
                <h1 className="section-title">{title}</h1>
            </div>
            {children}
        </section>
    );
};

export default Section;