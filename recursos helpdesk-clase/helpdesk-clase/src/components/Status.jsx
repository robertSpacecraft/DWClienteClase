export function Status({ loading, error, empty, emptyText = "No hay datos." }) {
  if (loading) return <p>Cargando...</p>;
  if (error) return <p style={{ color: "crimson" }}>Error: {error}</p>;
  if (empty) return <p>{emptyText}</p>;
  return null;
}
