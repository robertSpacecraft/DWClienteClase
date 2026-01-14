import { useUi } from "../context/UiContext";

export function UiMessageBar() {
  const { message, clearMessage } = useUi();

  if (!message) return null;

  return (
    <div className={`msgbar ${message.type}`}>
      <span>{message.text}</span>
      <button onClick={clearMessage}>x</button>
    </div>
  );
}
