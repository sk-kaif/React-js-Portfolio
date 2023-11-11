import { BrowserRouter as Router , Routes, Route} from "react-router-dom"
import Home from "./Home/Home"
import Navbar from "./navbar/Navbar"
import AboutMe from "./AboutMeSection/AboutMe"
import Form from "./from/Form"
import Footer from "./footer/Footer"
import Projects from "./ProjectSec/Projects"

const App = () => {
  return(
    <>
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<Form />} />
        <Route path="/project" element={<Projects />} />
      </Routes>
    <Footer />
    </Router>
    </>
  )
}
export default App





