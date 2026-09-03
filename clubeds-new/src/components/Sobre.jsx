function Sobre() {
  return (
    <section className="secao" id="sobre">
      <div className="container sobre-grid">
        <div>
          <p className="titulo-secao">Sobre</p>
          <h2>Como o ClubeDS funciona</h2>
          <p>Organização simples, rotina consistente e foco no desenvolvimento do aluno. Criado para fortalecer a aprendizagem no curso técnico por meio de projetos, cultura de colaboração e desenvolvimento contínuo.
          </p>
        </div>
        <aside className="quadro-entregas">
          <h3>Entregas do aluno</h3>
          <p>Ao longo do ciclo, você sai com:</p>
          <ul>
            <li>Repositório no GitHub bem organizado</li>
            <li>Deploy no Vercel (site no ar)</li>
            <li>Projeto com README e evidências</li>
            <li>Apresentação fonal (pitch técnico)</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}

export default Sobre;