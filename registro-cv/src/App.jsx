import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import ListaCurriculos from "./components/ListaCurriculos";
import DetalleCurriculo from "./components/DetalleCurriculo";
import "./App.css";

function App() {
  const [curriculos, setCurriculos] = useState(() => {
    return JSON.parse(localStorage.getItem("curriculos")) || [];
  });

  const [seleccionado, setSeleccionado] = useState(null);

  useEffect(() => {
    localStorage.setItem("curriculos", JSON.stringify(curriculos));
  }, [curriculos]);

  const agregarCurriculo = (nuevo) => {
    setCurriculos([...curriculos, { ...nuevo, id: Date.now() }]);
  };

  const eliminarCurriculo = (id) => {
    setCurriculos(curriculos.filter((c) => c.id !== id));
    setSeleccionado(null);
  };

  return (
    <div className="contenedor">
      <div className="panel-izq">
        <h1>Registro de Currículos</h1>
        <Formulario onGuardar={agregarCurriculo} />
      </div>

      <div className="panel-der">
        <ListaCurriculos
          curriculos={curriculos}
          onSeleccionar={setSeleccionado}
          onEliminar={eliminarCurriculo}
          seleccionado={seleccionado}
        />

        {seleccionado && (
          <DetalleCurriculo
            curriculo={seleccionado}
            onCerrar={() => setSeleccionado(null)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
