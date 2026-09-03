function CardTrilha({ icone, titulo, descricao, modalidade }) {
  return (
    <article className="card-trilha">
      <span className="icone-trilha" aria-hidden="true">{icone}</span>
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <span className="modalidade">{modalidade}</span>
    </article>
  );
}

export default CardTrilha;