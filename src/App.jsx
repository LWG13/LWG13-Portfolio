import './App.scss'
import Navigation from "./Components/Navigation.jsx"
import Banner from "./Components/Banner.jsx"
import Skills from "./Components/Skills.jsx"
import Projects from "./Components/Projects.jsx"
import Contact from "./Components/Contact.jsx"
import Subscribe from "./Components/subscribe.jsx"
export default function App() {
  return (
   <div>
    <div className="wrapper">
     <Navigation />
    </div>
    <div className="container">
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Subscribe />
    </div>
   </div>
    
  )
}
