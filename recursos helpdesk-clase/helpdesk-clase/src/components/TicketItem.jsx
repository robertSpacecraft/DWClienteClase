export function TicketItem({ ticket, onSetStatus, onDelete, disabled }) {
  return (
    <li className="card ticket">
      <div className="ticket-head">
        <div>
          <h3 className="ticket-title">#{ticket.id} {ticket.title}</h3>
          <div className="ticket-meta">{ticket.category} · Prioridad: <b>{ticket.priority}</b></div>
        </div>

        <span
          className={
            "pill " +
            (ticket.status === "Abierto"
              ? "open"
              : ticket.status === "En proceso"
              ? "progress"
              : "done")
          }
        >
          {ticket.status}
        </span>
      </div>

      <div className="ticket-desc">{ticket.description}</div>

      <div className="ticket-actions">
        <button onClick={() => onSetStatus(ticket.id, "Abierto")} disabled={disabled}>Abierto</button>
        <button onClick={() => onSetStatus(ticket.id, "En proceso")} disabled={disabled}>En proceso</button>
        <button onClick={() => onSetStatus(ticket.id, "Resuelto")} disabled={disabled}>Resuelto</button>
        <button className="btn-danger" onClick={() => onDelete(ticket.id)} disabled={disabled}>Borrar</button>
      </div>
    </li>
  );
}
