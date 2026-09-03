function Coordenacao() {
  return (
    <section className="secao secao-clara" id="coordenacao">
      <div className="container">
        <p className="titulo-secao">Coordenação e suporte</p>
        <h2>Conheça as mentes por trás da organização do ClubeDS.</h2>
        
        <div className="grade-coordenacao">
          <div className="card-coordenacao">
            <img src="https://clubeds.vercel.app/img/celso2.jpg" alt="Professor Celso Barreto" />
            <h3>Celso Barreto</h3>
            <p>Docente • Presidência</p>
            <a href="https://buscatextual.cnpq.br/buscatextual/visualizacv.do" target="_blank" rel="noreferrer">Currículo Lattes</a>
          </div>

          <div className="card-coordenacao">
            <img src="https://clubeds.vercel.app/img/anildo.jpeg" alt="Professor Anildo Matos" />
            <h3>Anildo Matos</h3>
            <p>Docente • Presidência</p>
            <a href="https://buscatextual.cnpq.br/buscatextual/visualizacv.do" target="_blank" rel="noreferrer">Currículo Lattes</a>
          </div>

          <div className="card-coordenacao">
            <div className="avatar-placeholder">JM</div>
            <h3>Diretoria Estudantil</h3>
            <p>Fotografia dos Estudantes</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Coordenacao;