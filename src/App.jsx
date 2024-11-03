import './App.scss'
import Service from "./Components/Service.jsx"
import Banner from "./Components/Banner.jsx"
import Skills from "./Components/Skills.jsx"
import Projects from "./Components/Projects.jsx"
import Contact from "./Components/Contact.jsx"
import Subscribe from "./Components/subscribe.jsx"
import Footer from "./Components/Footer.jsx"
export default function App() {
  return (
   <div>
     <div className="container">
      <Banner />
      <Skills />
      <Projects />
      <Service />
      <Contact />
      <Subscribe />
      <Footer />
     </div>
   </div>
    
  )
}
