import { Chip } from "@mui/material";
import { Typography } from "@mui/material";
const dateTimeFormat = new Intl.DateTimeFormat("en-GB", {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
});

export default function Message({ createdAt, text, displayName }) {
  return (
    <div>
      <br />
      <Chip
        label={<div><Typography style={{ whiteSpace: 'normal' }}><strong>{displayName}</strong><br />{text}</Typography></div>}
        style={{ height: "100%" }}
      />
      <div className="bg-lime-400 text-cyan-700">
        <p>{dateTimeFormat.format(new Date(createdAt.seconds * 1000))}</p>
      </div>
    </div>
  );
}
