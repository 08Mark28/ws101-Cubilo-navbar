import NavBar from "./NavBar"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import { Route, Routes} from "react-router-dom"

function App(){
    return (
        <>
            <NavBar />
            <div className="container">
                <Routes>
                    <Route path="home" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                </Routes>
            </div>
        </>
    )
}

export default App