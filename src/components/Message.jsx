const dateTimeFormat = new Intl.DateTimeFormat("en-GB", {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
});

export default function Message({ createdAt, text, displayName }) {
  return (
    <div className="bg-slate-100 rounded-xl">
      [
      {createdAt?.seconds ? (
        <span>{dateTimeFormat.format(new Date(createdAt.seconds * 1000))}</span>
      ) : null}
      ]{" "}
      <strong>
        {"<"}
        {displayName ? displayName : null}
        {">"}
      </strong>{" "}
      <br/>
      {text}
      <div className="bg-purple-800 align-middle border-blue-500">boop</div>
    </div>
  );
}
