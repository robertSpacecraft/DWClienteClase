export function TicketStats({ tickets }) {
  const total = tickets.length;
  const abiertos = tickets.filter((t) => t.status === "Abierto").length;
  const enProceso = tickets.filter((t) => t.status === "En proceso").length;
  const resueltos = tickets.filter((t) => t.status === "Resuelto").length;

  return (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 12 }}>
      <span>Total: <b>{total}</b></span>
      <span>Abiertos: <b>{abiertos}</b></span>
      <span>En proceso: <b>{enProceso}</b></span>
      <span>Resueltos: <b>{resueltos}</b></span>
    </div>
  );
}
