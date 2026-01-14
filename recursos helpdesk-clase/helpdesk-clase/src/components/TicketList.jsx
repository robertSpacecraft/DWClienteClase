import { TicketItem } from "./TicketItem";

export function TicketList({ tickets, onSetStatus, onDelete, disabled }) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tickets.map((t) => (
        <TicketItem
          key={t.id}
          ticket={t}
          onSetStatus={onSetStatus}
          onDelete={onDelete}
          disabled={disabled}
        />
      ))}
    </ul>
  );
}
