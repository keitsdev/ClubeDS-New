import { useState } from "react";

function Cadastro() {
  const [mensagemEnviada, setMensagemEnviada] = useState(false);

  function enviarFormulario(evento) {
    evento.preventDefault();
    setMensagemEnviada(true);
    evento.target.reset();
  }

  return (
    <section className="secao" id="cadastro">
      <div className="container cadastro-grid">
        <div className="cadastro-header">
          <p className="titulo-secao">Cadastro</p>
          <h2>Deseja participar?</h2>
          <p>Preencha os campos abaixo para testar a experiência do formulário.</p>
        </div>

        <form className="formulario" onSubmit={enviarFormulario}>
          <label htmlFor="nome">Nome</label>
          <input id="nome" name="nome" type="text" required />

          <label htmlFor="contato">Telefone ou e-mail</label>
          <input id="contato" name="contato" type="text" required />

          <label htmlFor="mensagem">Mensagem inicial</label>
          <textarea id="mensagem" name="mensagem" rows="5" required></textarea>

          <button className="botao" type="submit">Realizar cadastro</button>

          {mensagemEnviada && (
            <p className="mensagem-sucesso">
              Solicitação demonstrativa registrada na interface.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Cadastro;