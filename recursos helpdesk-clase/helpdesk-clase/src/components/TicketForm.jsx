import { useState } from "react";

export function TicketForm({ onAdd, disabled }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("React");
  const [priority, setPriority] = useState("Media");
  const [description, setDescription] = useState("");

  const [formError, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);

    const t = title.trim();
    const d = description.trim();

    if (t.length < 4) {
      setFormError("El título debe tener al menos 4 caracteres.");
      return;
    }

    if (d.length < 8) {
      setFormError("La descripción debe tener al menos 8 caracteres.");
      return;
    }

    const newTicket = {
      title: t,
      category,
      priority,
      status: "Abierto",
      description: d,
      createdAt: new Date().toISOString(),
    };

    try {
      await onAdd(newTicket);

      // limpiar formulario
      setTitle("");
      setCategory("React");
      setPriority("Media");
      setDescription("");
    } catch (err) {
      // el error real ya lo gestiona el hook, pero aquí puedes dar feedback local
      setFormError(err?.message ?? "No se pudo crear el ticket.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <h2 className="form-title">Nueva incidencia</h2>

      {formError && <p style={{ color: "crimson", marginTop: 0 }}>{formError}</p>}

      <div className="form-grid">
        <div className="field">
          <label>Título</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            disabled={disabled}
            placeholder="Ej: No compila el proyecto"
          />
        </div>

        <div className="field">
          <label>Categoría</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            disabled={disabled}
          >
            <option value="React">React</option>
            <option value="JavaScript">JavaScript</option>
            <option value="HTML/CSS">HTML/CSS</option>
            <option value="Redes">Redes</option>
            <option value="Sistemas">Sistemas</option>
          </select>
        </div>

        <div className="field">
          <label>Prioridad</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            disabled={disabled}
          >
            <option value="Alta">Alta</option>
            <option value="Media">Media</option>
            <option value="Baja">Baja</option>
          </select>
        </div>
      </div>

      <div className="field form-desc">
        <label>Descripción</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          disabled={disabled}
          rows={3}
          placeholder="Explica el problema con detalle..."
        />
      </div>

      <div className="form-actions">
        <button className="btn-primary" type="submit" disabled={disabled}>
          Crear ticket
        </button>
      </div>
    </form>
  );
}
