import Agentes from "../Agentes";
import "./Mapa.css";

const Mapa = (props) => {
  const css = { backgroundColor: props.corSecundaria };

  return props.agentes.length > 0 ? (
    <section className="mapa" style={css}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <div className="agente">
        {props.agentes.map((agente) => (
          <Agentes corDeFundo={props.corPrimaria} key={agente.nome} nome={agente.nome} funcao={agente.funcao} imagem={agente.imagem} />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Mapa;
