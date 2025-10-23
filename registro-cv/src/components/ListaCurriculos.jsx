function ListaCurriculos({ curriculos, onSeleccionar, onEliminar, seleccionado }) {
  if (curriculos.length === 0)
    return <p className="sin-datos">No hay currículos registrados.</p>;

  return (
    <div className="lista">
      <h2>Currículos registrados</h2>
      {curriculos.map((cv) => (
        <div
          key={cv.id}
          className={`item ${seleccionado?.id === cv.id ? "seleccionado" : ""}`}
        >
          <div onClick={() => onSeleccionar(cv)} className="info">
            <strong>{cv.nombre}</strong>
            <span>{cv.email}</span>
          </div>
          <button onClick={() => onEliminar(cv.id)}>🗑️</button>
        </div>
      ))}
    </div>
  );
}

export default ListaCurriculos;