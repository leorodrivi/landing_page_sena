const Navbar = ({ currentSection, setCurrentSection }) => {
  const handleNavClick = (section) => {
    setCurrentSection(section)
    
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <img src="https://uniempresarial.edu.co/wp-content/uploads/2024/11/Captura_de_pantalla_2024-11-22_085950-removebg-preview.png" alt="" className="logo" />
        <ul className="nav-links">
          <li>
            <a 
              className={currentSection === 'inicio' ? 'active' : ''}
              onClick={() => handleNavClick('inicio')}
            >
              Inicio
            </a>
          </li>
          <li>
            <a 
              className={currentSection === 'empresa' ? 'active' : ''}
              onClick={() => handleNavClick('empresa')}
            >
              Empresa
            </a>
          </li>
          <li>
            <a 
              className={currentSection === 'contacto' ? 'active' : ''}
              onClick={() => handleNavClick('contacto')}
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar