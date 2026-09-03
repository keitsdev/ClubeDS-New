function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-grid">
        <div>
          <h1>Um clube para construir projetos de verdade - com método, colaboração e evolução.</h1>
          <p>O ClubeDS é um espaço de aprendizagem prática para alunos do curso técnico, com oficinas, palestras, trilhas e projetos guiados.</p>
          <div className="grupo-botoes">
            <a className="botao" href="#cadastro">Quero participar</a>
            <a className="botao botao-secundario" href="#sobre">Como funciona</a>
          </div>
          <small>* A participação completa nas atividades exige matrícula ativa.</small>
        </div>
        
        <div className="destaques" aria-label="Destaques do clube">
          <aside className="quadro-destaques">
            <h3>Destaques</h3>
            <ul>
              <li>Trilhas do nível iniciante ao avançado</li>
              <li>Oficinas e workshops</li>
              <li>Práticas de deploy com Git, GitHub e Vercel</li>
              <li>Palestras sobre carreira e mercado</li>
              <li>Projetos reais em equipe para enriquecer o portfólio</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Hero;