function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-marca">
          <img src="https://clubeds.vercel.app/img/logo2.png" alt="Logo do ClubeDS" />
          <div className="footer-texto">
            <strong>ClubeDS</strong>
            <p>Clube de Programação</p>
          </div>
        </div>
        <p className="footer-copyright">© {anoAtual} — Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;