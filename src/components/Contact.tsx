import * as React from "react";
import Section from "../templates/Section";
import "../styles/components/Contact.css";
import { FaWhatsapp, FaClock } from "react-icons/fa";
import { SiIfood } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import { IFOOD_LINK, FORMATTED_PHONE, getWhatsappLink } from "../utils/contact.util";

const Contact: React.FC = () => {
    return (
        <Section title="Nossos contatos" aria-label="Contact Section" id="contact">
            <div className="container contact-container">
                <div className="container-column">
                    <a href={getWhatsappLink()} className="button primary contact-button">
                        <div className="icon-container">
                            <FaWhatsapp className="icon" />
                            {FORMATTED_PHONE} <br />
                        </div>
                        <div>
                            Clique aqui e faça seu pedido!
                        </div>
                    </a>
                    <a href={IFOOD_LINK} className="button secondary contact-button secondary">
                        <div className="icon-container">
                            <SiIfood className="icon" />
                            ou peça pelo iFood!
                        </div>
                    </a>
                </div>
                <div className="container-column">
                    <div className="contact-description">
                        <FaLocationDot className="icon" />
                        <p>
                            Também atendemos presencialmente no endereço:<br />
                            Rua Alfredo Lopes 1717 - CEP 13560460
                        </p>
                    </div>
                    <div className="contact-description">
                        <FaClock className="icon" />
                        <p>Funcionamos de segunda a sábado, das 11:00 às  15:00</p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Contact;