import "./Agentes.css";

const Agentes = ({ nome, funcao, imagem, corDeFundo }) => {
  return (
    <div className="agentes">
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{funcao}</h5>
      </div>
    </div>
  );
};

export default Agentes;
