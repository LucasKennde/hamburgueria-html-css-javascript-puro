// src/pages/Home.js

import "./style.css";
import { useContext, useState } from "react";
import { CardBurger } from "../../components/CardBurguer";
import { CartContext } from "../../context/CartContext";

export const Home = () => {
    const { addToCart,burguersList, setBurguersList } = useContext(CartContext);
    
    return (
        <section className="wrapper">
            <div className="container">
                <div className="grid-burguers">
                    {burguersList.map((burguer, index) => (
                        <CardBurger key={index} addCart={addToCart} burguer={burguer} />
                    ))}
                </div>

            </div>
           
        </section>
    );
};
