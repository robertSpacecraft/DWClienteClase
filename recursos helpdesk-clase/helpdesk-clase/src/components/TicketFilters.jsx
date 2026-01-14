export function TicketFilters({
  search,
  status,
  category,
  priority,
  categories,
  onChangeSearch,
  onChangeStatus,
  onChangeCategory,
  onChangePriority,
  onReset,
}) {
  return (
    <div className="filters card">
      <div className="field">
        <label>Buscar</label>
        <input
          type="text"
          placeholder="Buscar por título o descripción..."
          value={search}
          onChange={(e) => onChangeSearch(e.target.value)}
          style={{ padding: 8, minWidth: 260 }}
        />
      </div>

      <div className="field">
        <label>Estado</label>
        <select value={status} onChange={(e) => onChangeStatus(e.target.value)} style={{ padding: 8 }}>
          <option value="">Estado (todos)</option>
          <option value="Abierto">Abierto</option>
          <option value="En proceso">En proceso</option>
          <option value="Resuelto">Resuelto</option>
        </select>
      </div>
      <div className="field">
        <label>Categoría</label>
        <select value={category} onChange={(e) => onChangeCategory(e.target.value)} style={{ padding: 8 }}>
          <option value="">Categoría (todas)</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label>Prioridad</label>
        <select value={priority} onChange={(e) => onChangePriority(e.target.value)} style={{ padding: 8 }}>
          <option value="">Prioridad (todas)</option>
          <option value="Alta">Alta</option>
          <option value="Media">Media</option>
          <option value="Baja">Baja</option>
        </select>
      </div>
      <button onClick={onReset}>Limpiar filtros</button>
    </div>
  );
}
