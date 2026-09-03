import CardTrilha from "./CardTrilha";
import { trilhas } from "../data/conteudo";

function Trilhas() {
  return (
    <section className="secao secao-clara" id="trilhas">
      <div className="container">
        <p className="titulo-secao">Trilhas</p>
        <h2>Um caminho claro para evoluir, sem pular etapas importantes.</h2>
        <div className="grade-trilhas">
          {trilhas.map((trilha) => (
            <CardTrilha
              key={trilha.id}
              icone={trilha.icone}
              titulo={trilha.titulo}
              descricao={trilha.descricao}
              foco={trilha.foco}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trilhas;