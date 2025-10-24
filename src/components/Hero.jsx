const Hero = ({ setCurrentSection }) => {
  const handleKnowMore = () => {
    setCurrentSection('empresa')
    const element = document.getElementById('empresa')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="inicio" className="hero">
      <div className="hero-content">
        <h1>Servicio Nacional de Aprendizaje</h1>
        <p>FORMACIÓN PARA EL TRABAJO</p>
        <button className="cta-button" onClick={handleKnowMore}>
          CONOCER MÁS
        </button>
      </div>
    </section>
  )
}

export default Hero