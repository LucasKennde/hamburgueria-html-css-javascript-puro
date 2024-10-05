import logo from '../../assets/images/logo.png'
import "./style.css"
export const Header = () => {
    return (
        <>
        <header className="wrapper">
            <div className="container header">
                <img src={logo} alt="" />
            </div>
        </header>
        </>
    )
}