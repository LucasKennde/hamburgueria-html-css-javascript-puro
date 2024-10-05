import { Header } from "./components/Header";
import './App.css'
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { burguers } from "./utils/burguers";
function App() {

  return (
    <>
      <Header/>
      <Navbar/>
      <Home/>
    </>
  )
}

export default App
