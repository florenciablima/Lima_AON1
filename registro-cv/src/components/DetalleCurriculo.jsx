function DetalleCurriculo({ curriculo, onCerrar }) {
  return (
    <div className="detalle">
      <button onClick={onCerrar} className="cerrar">✖</button>
      <h3>{curriculo.nombre}</h3>
      {curriculo.foto && (
        <img src={curriculo.foto} alt={curriculo.nombre} className="foto" />
      )}
      <p><strong>Email:</strong> {curriculo.email}</p>
      <p><strong>Teléfono:</strong> {curriculo.telefono}</p>
      <p><strong>Educación:</strong> {curriculo.educacion}</p>
      <p><strong>Experiencia:</strong> {curriculo.experiencia}</p>
    </div>
  );
}

export default DetalleCurriculo;