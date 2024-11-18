import * as React from "react";
import PriceTag from "./PriceTag";
import "../styles/components/MenuItem.css";

type MenuItemProps = {
    title: string;
    description: string;
    image: React.ReactNode;
    prices: {
        label: string;
        price: number;
    }[]
}

const MenuItem: React.FC<MenuItemProps> = ({ title, description, image, prices }) => {
    return (
        <li className="menu-item" data-testid="menu-item">
            <div className="menu-item-image">
                {image}
            </div>
            <div className="menu-item-content">
                <h2 className="menu-item-title">{title}</h2>
                <p>{description}</p>
            </div>
            <ul className="menu-item-prices">
                {prices.map((item, index) => (
                    <PriceTag key={index} label={item.label} price={item.price} />
                ))}
            </ul>
        </li>
    );
};

export default MenuItem;