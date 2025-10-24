const Services = () => {
  const programs = [
    {
      id: 1,
      title: "ADSO",
      description: "Análisis y Desarrollo de Software"
    },
    {
      id: 2,
      title: "ANIMACIÓN 3D",
      description: "Creación de animaciones y modelos tridimensionales"
    },
    {
      id: 3,
      title: "REDES DE DATOS",
      description: "Configuración y administración de redes de computadores"
    }
  ]

  return (
    <section id="empresa" className="services">
      <h2 className="section-title">PROGRAMAS DE FORMACIÓN</h2>
      <p className="section-subtitle">Desarrolla tus habilidades para el mundo laboral</p>
      
      <div className="service-cards">
        {programs.map(program => (
          <div key={program.id} className="service-card">
            <h3>{program.title}</h3>
            <p>{program.description}</p>
          </div>
        ))}
      </div>
      
      <div className="divider"></div>
    </section>
  )
}

export default Services