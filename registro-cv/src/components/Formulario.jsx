import { useState } from "react";

function Formulario({ onGuardar }) {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    educacion: "",
    experiencia: "",
    foto: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFoto = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setForm({ ...form, foto: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGuardar(form);
    setForm({
      nombre: "",
      email: "",
      telefono: "",
      educacion: "",
      experiencia: "",
      foto: "",
    });
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre completo"
        value={form.nombre}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="telefono"
        placeholder="Teléfono"
        value={form.telefono}
        onChange={handleChange}
      />
      <input
        type="text"
        name="educacion"
        placeholder="Educación / Título"
        value={form.educacion}
        onChange={handleChange}
      />
      <textarea
        name="experiencia"
        placeholder="Experiencia laboral"
        value={form.experiencia}
        onChange={handleChange}
      />
      <input type="file" accept="image/*" onChange={handleFoto} />
      <button type="submit">Guardar Currículo</button>
    </form>
  );
}

export default Formulario;