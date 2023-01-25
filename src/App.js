import "./App.css";
import logoMaestroRoshi from "./images/logo.png";
import Boton from "./Componentes/Boton.js";
import Contador from "./Componentes/Contador";
import { useState } from "react";

function App() {
  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };
  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className="logo-container">
        <div className="principal-container">
          <img
            className="logo"
            src={logoMaestroRoshi}
            alt="logo maestro roshi"
          />
          <Contador numClics={numClics} />
          <Boton texto="Clic" esBotonDeClic={true} manejarClic={manejarClic} />
          <Boton
            texto="Reiniciar"
            esBotonDeClic={false}
            manejarClic={reiniciarContador}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
