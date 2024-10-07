import "./style.css"
import { burguers } from "../../utils/burguers"
import { useEffect } from "react"
import { CardBurger } from "../../components/CardBurguer"
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
                            <CardBurger key={index} burguer={burguer} />

                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}