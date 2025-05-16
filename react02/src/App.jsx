import Footer from "./components/Footer"
import Header from "./components/Header"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Personajes from "./pages/personajes/Personajes"


const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Personajes/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App