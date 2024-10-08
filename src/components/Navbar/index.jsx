import "./style.css"
import logo from '../../assets/images/logo.png'
import { CartContext } from "../../context/CartContext";
import { useContext, useState } from "react";
import { Modal } from "../Modal";
import { burguers } from "../../utils/burguers";

export const Navbar = () => {
    const { valorTotal, setBurguersList } = useContext(CartContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openAddModal = () => {
        setIsModalOpen(true); 
      };

    return (
        <>
            <section className="wrapper menu">
                <div className="container">
                    <div className="navbar">

                        <img src={logo} alt="" onClick={()=>setBurguersList(burguers)}/>
                        <ul className="menu-list">
                            <li className="menu-item" onClick={()=>{
                                setBurguersList(burguers.filter(burguer=>burguer.tipo=='combo'))}}>Combos</li>
                            <li className="menu-item" onClick={()=>{
                                setBurguersList(burguers.filter(burguer=>burguer.tipo=='combo'))}}>Burguer</li>
                            <li className="menu-item" onClick={()=>{
                                setBurguersList(burguers.filter(burguer=>burguer.tipo=='refrigerante'))}}>Bebidas</li>
                            <li className="menu-item" onClick={()=>{
                                setBurguersList(burguers.filter(burguer=>burguer.tipo=='combo'))}}>Entradas</li>
                            <li className="menu-item" onClick={()=>{
                                setBurguersList(burguers.filter(burguer=>burguer.tipo=='combo'))}}>Promoções</li>
                        </ul>
                    </div>
                    <div className="cart" onClick={openAddModal}>
                        <div className="svg-cart">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" /></svg>
                        </div>
                        <div>
                            <p>Carrinho</p>
                            <p className="value">R$ {valorTotal.toFixed(2)}</p>
                        </div>
                    </div>

                </div>

            </section>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    )
}