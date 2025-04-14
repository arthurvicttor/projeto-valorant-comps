import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Mapa from "./componentes/Mapa";
import Rodape from "./componentes/Rodape";

function App() {
  const mapas = [
    {
      nome: "Ascent",
      corPrimaria: "#6949C4",
      corSecundaria: "#EFE8FB",
    },
    {
      nome: "Bind",
      corPrimaria: "#A96928",
      corSecundaria: "#F7EDE2",
    },
    {
      nome: "Breeze",
      corPrimaria: "#1F9D8A",
      corSecundaria: "#D5F5F2",
    },
    {
      nome: "Fracture",
      corPrimaria: "#5A5A5A",
      corSecundaria: "#E4E4E4",
    },
    {
      nome: "Haven",
      corPrimaria: "#4B6C4B",
      corSecundaria: "#E6F0E6",
    },
    {
      nome: "Icebox",
      corPrimaria: "#3D9FE3",
      corSecundaria: "#E0F4FD",
    },
    {
      nome: "Lotus",
      corPrimaria: "#B55894",
      corSecundaria: "#FDE9F3",
    },
    {
      nome: "Pearl",
      corPrimaria: "#2E7A99",
      corSecundaria: "#D3ECF4",
    },
    {
      nome: "Split",
      corPrimaria: "#7E3F98",
      corSecundaria: "#F3E9FB",
    },
    {
      nome: "Sunset",
      corPrimaria: "#DB5C3E",
      corSecundaria: "#FFECE6",
    },
  ];

  const [agentes, setAgentes] = useState([]);

  const aoNovoAgenteAdicionado = (agente) => {
    setAgentes([...agentes, agente]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario mapas={mapas.map((mapa) => mapa.nome)} aoAgenteCadastrado={(agente) => aoNovoAgenteAdicionado(agente)} />

      {mapas.map((mapa) => (
        <Mapa key={mapa.nome} nome={mapa.nome} corPrimaria={mapa.corPrimaria} corSecundaria={mapa.corSecundaria} agentes={agentes.filter((agente) => agente.mapa === mapa.nome)} />
      ))}

      <Rodape></Rodape>
    </div>
  );
}

export default App;
