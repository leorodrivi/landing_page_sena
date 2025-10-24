import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Contact from './components/Contact'
import './App.css'

function App() {
  const [currentSection, setCurrentSection] = useState('inicio')

  return (
    <div className="App">
      <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <Hero setCurrentSection={setCurrentSection} />
      <Services />
      <Contact />
    </div>
  )
}

export default App