import styles from "./App.module.css"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Experience from "./components/Experience/Experience"
import Projects  from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"
import Skills from "./components/Skills/Skills"
import Footer from "./components/Footer/Footer"
import Education from "./components/Education/Education"

function App() {
  return (
    <div className={styles.App}>
    <Navbar/>
    <Hero/>
    <About/> 
    <Education/>
    <Experience/> 
    <Skills/>
    <Projects/>   
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App
