import * as React from "react";
import "../styles/components/PriceTag.css";

type PriceTagProps = {
    label: string;
    price: number;
    link: string;
}

const PriceTag: React.FC<PriceTagProps> = ({ label, price, link }) => {
    const formattedPrice = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(price);

    return (
        <li className="price-tag" data-testid="price-tag">
            <a href={link}>
                <div className="price-tag-label">{label}</div>
                <p className="price-tag-price" data-testid="formatted-price">{formattedPrice}</p>
            </a>
        </li>
    );
};

export default PriceTag;