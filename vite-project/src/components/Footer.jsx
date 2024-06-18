// Footer.js
import '../index.scss'; // Asegúrate de importar tus estilos

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__logo">
          {/* Aquí puedes colocar tu logo */}
          <img src="/path-to-your-logo.png" alt="Logo de la empresa" />
        </div>
        <div className="footer__copyright">
          {/* Aquí va el copyright */}
          <p>© 2024 Pri Córdoba. Todos los derechos reservados.</p>
        </div>
        <div className="footer__extra">
          {/* Otro contenido adicional */}
          <p>Otra información adicional aquí.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
