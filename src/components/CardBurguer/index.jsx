import { useState } from 'react'
import './style.css'

export const CardBurger = ({ burguer, addCart }) => {
    const [qtd, setQtd] = useState(0);

    return (
        <div className="card-burguer">
            <img src={burguer.image} alt="" />
            <div className="card-description">
                <h2>{burguer.name} <span>R${burguer.price.toFixed(2)}</span></h2>
                <p>{burguer.descricao}</p>
                <div className='qtd-burguer'>
                    <button onClick={() => qtd > 0 && setQtd(qtd - 1)}>-</button>
                    <span>{qtd}</span>
                    <button onClick={() => setQtd(qtd + 1)}>+</button>
                    <div onClick={() => {
                        if (qtd > 0) {
                            addCart({
                                nome: burguer.name,
                                preco: burguer.price,
                                quantidade: qtd,
                                valorTotal: burguer.price * qtd,
                            });
                            setQtd(0);
                        }
                    }}>adicionar</div>
                </div>
            </div>
        </div>
    )
}
