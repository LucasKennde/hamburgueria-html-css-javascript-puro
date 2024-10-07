export const CardBurger = ({burguer}) => {
    return (
        <div className="card-burguer">

            <img src={burguer.image} alt="" />
            <div className="card-description">
                <h2>{burguer.name}</h2>
                <p>{burguer.descricao}</p>
                <h2>Price: ${burguer.price}</h2>
            </div>
        </div>
    )
}