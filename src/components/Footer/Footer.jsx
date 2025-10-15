import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} SocioEducativo CEAS. Todos los derechos reservados.(siempre quise poner eso equisde)</p>
        <div className="footer-links">
          <a href="#">Links varios si tienen los cabeza de pitos</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
