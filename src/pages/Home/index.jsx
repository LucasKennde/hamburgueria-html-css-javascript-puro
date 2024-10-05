import "./style.css"
import { burguers } from "../../utils/burguers"
import { useEffect } from "react"
export const Home = () => {

    useEffect(() => {
        console.log(burguers)
    }, [])


    return (
        <>
            <section className="wrapper">
                <div className="container">

                    <div className="grid-burguers">
                        {burguers.map((burguer, index) => (
                            <div key={index} className="card-burguer">

                                <img src={burguer.image} alt="" />
                                <div className="card-description">
                                    <h2>{burguer.name}</h2>
                                    <p>{burguer.descricao}</p>
                                    <h2>Price: ${burguer.price}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}