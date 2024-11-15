import * as React from "react";
import "../styles/components/PriceTag.css";

type PriceTagProps = {
    label: string;
    price: number;
}

const PriceTag: React.FC<PriceTagProps> = ({ label, price }) => {
    const formattedPrice = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(price);

    return (
        <li className="price-tag" data-testid="price-tag">
            <div className="price-tag-label">{label}</div>
            <p className="price-tag-price" data-testid="formatted-price">{formattedPrice}</p>
        </li>
    );
};

export default PriceTag;