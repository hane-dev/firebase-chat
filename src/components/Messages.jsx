import Message from "./Message";

export default function Messages({ messages }) {
  return (
    <pre className="bg-slate-200">
      {messages?.map((message) => (
        <Message key={message.id} {...message} />
      ))}
    </pre>
  );
}
