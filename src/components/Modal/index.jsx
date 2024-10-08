import React, { useContext } from "react";
import "./style.css";
import { CartContext } from "../../context/CartContext";

export const Modal = ({ isOpen, onClose }) => {
  const { cart, valorTotal, updateQuantity } = useContext(CartContext);
  console.log(cart)

  const gerarIdUnico = () => {
    return "_" + Math.random().toString(36).substr(2, 9);
  };



  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="title-pedidos">
          <h2>Pedidos</h2>
          <h2 className="close-modal" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </h2>
        </div>
        
        <div className="pedido">
          <div className="header-pedidos grid-pedido">
            <div>QTD</div>
            <div>Burguer</div>
            <div> Valor</div>
            <div>Valor total</div>
          </div>
          {cart && cart.map((element, index) => {
            return (
              <div key={index} className="grid-pedido">
                <div className="controle-de-quantidade">
                <button onClick={() => updateQuantity(element.nome, element.quantidade - 1)}>-</button>
                  
                 <span> {element.quantidade}</span>

                  <button onClick={() => updateQuantity(element.nome, element.quantidade + 1)}>+</button>
               
                </div>
                <div>{element.nome}</div>
                <div> {element.preco.toFixed(2)}</div>
                <div>{element.valorTotal.toFixed(2)}</div>
              </div>
            )
          })}
          <div className="total-pedido">
            <div>Total</div>
            <div>R$ {valorTotal.toFixed(2)}</div>
          </div>

          <button className="btn btn-finalizar">Finalizar Pedido</button>
        </div>
      </div>
    </div>
  );
};
