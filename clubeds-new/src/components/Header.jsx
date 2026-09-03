import { useState } from "react";

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  function alternarMenu() {
    setMenuAberto(!menuAberto);
  }

  function fecharMenu() {
    setMenuAberto(false);
  }

  return (
    <header className="header">
      <div className="container header-conteudo">
        <a className="marca" href="#inicio" onClick={fecharMenu}>
          <img src="https://clubeds.vercel.app/img/logo2.png" alt="Logo do ClubeDS" />
          <div className="marca-texto">
            <span>ClubeDS</span>
            <small>Clube de Programação</small>
          </div>
        </a>

        <button
          className="menu-botao"
          type="button"
          onClick={alternarMenu}
          aria-label="Abrir ou fechar menu"
          aria-expanded={menuAberto}
        >
          {menuAberto ? "Fechar" : "Menu"}
        </button>

        <nav className={menuAberto ? "nav aberta" : "nav"} aria-label="Navegação principal">
          <a href="#inicio" onClick={fecharMenu}>Início</a>
          <a href="#sobre" onClick={fecharMenu}>Sobre</a>
          <a href="#coordenacao" onClick={fecharMenu}>Coordenação</a>
          <a href="#cadastro" onClick={fecharMenu}>Cadastro</a>
          <a className="botao botao-pequeno" href="#cadastro" onClick={fecharMenu}>
            Quero participar
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;