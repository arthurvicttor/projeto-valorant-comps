import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import Dropdown from "../Dropdown";
import "./Formulario.css";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [funcao, setFuncao] = useState("");
  const [imagem, setImagem] = useState("");
  const [mapa, setMapa] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoAgenteCadastrado({
      nome,
      funcao,
      imagem,
      mapa,
    });
    setNome("");
    setFuncao("");
    setImagem("");
    setMapa("");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do agente</h2>
        <CampoTexto obrigatorio={true} label="Nome do agente" placeholder="Digite o nome do agente" valor={nome} aoAlterado={(valor) => setNome(valor)} />
        <CampoTexto obrigatorio={true} label="Função" placeholder="Digite a função do agente" valor={funcao} aoAlterado={(valor) => setFuncao(valor)} />
        <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem do agente" valor={imagem} aoAlterado={(valor) => setImagem(valor)} />
        <Dropdown obrigatorio={true} label="Mapa" itens={props.mapas} valor={mapa} aoAlterado={(valor) => setMapa(valor)} />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
